import React from 'react'

function Hello() {
  return (
    <div>
from prettytable import PrettyTable
user_data = []
while True:
    print("Select Option...")
    print("1. Add User")
    print("2. Show Data")
    print("3. Delete user")
    print("4. Edit user")
    print("5. Exit")
    choice = input("Enter choice (1/2/3/4/5): ")
    if choice == '1':
        name = input("Enter your name: ")
        while True:
            try:
                age = int(input("Enter your age: "))
                print(f"Your age is: {age}") 
                break 
            except ValueError:
                print("Invalid input! Please enter a valid integer.")
        roll_number = input("Enter your roll number: ")
        task = input("Enter your Task: ")
        status = input("Enter your Status: ")
        user_data.append([name, age, roll_number, task, status])
        user_table = PrettyTable(["Name", "Age", "Roll Number", "Task", "Status"])
        user_table.add_row([name, age, roll_number, task, status])
        print(user_table)
    elif choice == '2':
        if user_data:
            user_table = PrettyTable(["Name", "Age", "Roll Number", "Task", "Status"])
            for user in user_data:
                user_table.add_row(user)
            print(user_table)
        else:
            print("No user data available.")
    elif choice == '3':
        roll_number = input("Enter your roll number")
        print("Select Option")
        print("1. Delete Name")
        print("2. Delete Age")
        print("3. Delete roll Number")
        print("4. Delete Task")
        print("5. Delete Status")
        print("6. Delete All data")
        print("7. remove row")
        for user in user_data:
            if user[2] == roll_number:
                print(f"User found: {user}")
                choice = input("Enter choice (1/2/3/4/5/6/7): ")
                if choice == '1':
                    user[0] = ''
                elif choice == '2':
                    user[1] = ''
                elif choice == '3':
                    user[2] = ''
                elif choice == '4':
                    user[3] = ''
                elif choice == '5':
                    user[4] = ''   
                elif choice == '6':
                    user[0] = ''
                    user[1] = ''
                    user[2] = ''
                    user[3] = ''
                    user[4] = ''
                    print(f"User with roll number {roll_number} Deleted.")
                elif choice == '7':
                    user_data.remove(user)
                    break
                else:
                    print(f"NO user found with {roll_number}.")
                    
    elif choice == '4':
        roll_number = input("Enter your roll number")
        print("Select Option...")
        print("1. Update Name")
        print("2. Update Age")
        print("3. Update roll Number")
        print("4. Update Task")
        print("5. Update Status")
        print("6. Update All data")
        for user in user_data:
            if user[2] == roll_number:
                print(f"User found: {user}")
                choice = input("Enter choice (1/2/3/4/5):")
                if choice == '1':
                    user[0] = input("Update Your name :")
                elif choice == '2':
                    user[1] = input("Update Your age :")
                elif choice == '3':
                    user[2] = input("Update Your roll number :")
                elif choice == '4':
                    user[3] = input("Update Your Task :")
                elif choice == '5':
                    user[4] = input("Update Your Status :")
                    print(f"User with roll number {roll_number} Updated.")
                elif choice == '6':
                    user[0] = input("Update Your name :")
                    user[1] = input("Update Your age :")
                    user[2] = input("Update Your roll number :")
                    user[3] = input("Update Your Task :")
                    user[4] = input("Update Your Status :")
                    break
                else:
                    print(f"NO user found with {roll_number}.")
    elif choice == '5':
        print("Exiting...")
        break
    else:
        print("User not found!")
      
    </div>
  )
}

export default Hello
