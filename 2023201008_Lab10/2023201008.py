import random
import pandas as pd

# Read the CSV file
data = pd.read_csv('stock_data.csv')

data = data.iloc[:, :-6]

data.to_csv('Q1_1.txt', index=False, sep=',')
# ---------------------------------------------------------------------------------------
condition = lambda x: x['% Chng'] >= -3.0
new_rows = filter(lambda x: condition(data.loc[x]), data.index)
updated_data = data.loc[new_rows]
updated_data.to_csv('Q1_2.txt', index=False, sep=',') 
# ---------------------------------------------------------------------------------------

updated_data[['Open', 'High', 'Low']] = updated_data[['Open', 'High', 'Low']].apply(lambda x: x.str.replace(',', '').astype(float))
averages = updated_data[['Open', 'High', 'Low']].apply(lambda col: col.mean())

# Write the averages into Q1_3.txt
with open('Q1_3.txt', 'w') as file:
    file.write(f"Average of Open: {averages['Open']}\n")
    file.write(f"Average of High: {averages['High']}\n")
    file.write(f"Average of Low: {averages['Low']}\n")
# ---------------------------------------------------------------------------------------

userinp = input("Enter any English character: ")

if not userinp.isalpha() or len(userinp) != 1:
    # print("Invalid input. Please enter a single English character.")
    with open('Q1_4.txt', 'w') as file:
        file.write("")
else:
    filtered_data_inp = updated_data[updated_data['Symbol'].str.upper().str.startswith(userinp)]

    if len(filtered_data_inp) > 0:
        print(filtered_data_inp[['Symbol', 'LTP']].to_string(index=False))

        with open('Q1_4.txt', 'w') as file:
            file.write(filtered_data_inp[['Symbol', 'LTP']].to_string(index=False))
    else:
        # print("There are no such stocks matching with the given input.")
        with open('Q1_4.txt', 'w') as file:
            file.write("")

# ---------------------------------------------------------------------------------------

listSalary=[round(random.uniform(10000.00, 50000.00), 2) for _ in range(10)]
listAge=[random.randint(21, 55) for _ in range(10)]
ListClass=[random.choice(['A', 'B', 'C', 'D', 'E', 'F']) for _ in range(10)]
ListStatus=[random.choice([True, False]) for _ in range(10)]

data = {
    'Salary': listSalary,
    'Age': listAge,
    'Class': ListClass,
    'Status': ListStatus
}

df = pd.DataFrame(data)

output_file = 'Q1_5.txt'
df.to_csv(output_file, sep=',', index=False)