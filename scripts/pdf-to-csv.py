import pdfplumber
import pandas as pd
import re

with pdfplumber.open('data/raw/1_2024-adult-compendium_1_2024.pdf') as pdf:
    all_data = []
    
    for page_num, page in enumerate(pdf.pages):
        print(f"Processing page {page_num + 1}...")
        text = page.extract_text()
        
        if not text:
            continue
        
        # Split into lines
        lines = text.split('\n')
        
        for line in lines:
            # Skip header line and empty lines
            if not line.strip() or 'Major Heading' in line or 'Activity Code' in line:
                continue
            
            # Parse each line: Major Heading, Activity Code (5 digits), MET Value (number), Activity Description
            # Pattern: text, 5-digit code, number (with possible decimal), rest is description
            match = re.match(r'^(.+?)\s+(\d{5})\s+(\d+\.?\d*)\s+(.+)$', line.strip())
            
            if match:
                major_heading = match.group(1).strip()
                activity_code = match.group(2).strip()
                met_value = match.group(3).strip()
                description = match.group(4).strip()
                
                all_data.append([major_heading, activity_code, met_value, description])
    
    print(f"\nTotal activities extracted: {len(all_data)}")

# Create DataFrame
df = pd.DataFrame(all_data, columns=['Major Heading', 'Activity Code', 'MET Value', 'Activity Description'])

# Convert MET Value to float
df['MET Value'] = pd.to_numeric(df['MET Value'], errors='coerce')

# Save to CSV
df.to_csv('data/processed/physical_activities.csv', index=False)