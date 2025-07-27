🧩 Overview

Word Shuffle is a fun and interactive word-guessing game built using Salesforce Aura Components and Apex. The goal is to guess the correct Win Word.
There are three game modes — Easy, Medium, and Hard — with increasing difficulty:

- Easy: 3×3 tile grid
- Medium: 4*4 tile grid
- Hard: 6*6 tile grid

Initially, all tiles are hidden. Once a user selects a mode and starts the game:
- They get 3 moves per game
- If they lose, they can reshuffle and continue with moves readded.

All game results are stored in a custom object and displayed dynamically in a result board using a Lightning DataTable. This app showcases how to create a dynamic and engaging UI experience using custom components, event handling, and server-side logic in Salesforce.

⚙️ Tech Stack
- Salesforce Lightning Aura Components
- Apex (Backend Logic)
- Custom CSS for Styling
- Static Resources for Icons and fit-text functionality

🎮 Features

✅ Random word selection using Apex

✅ Tiles hidden by default, revealed on click

✅ Max 3 attempts to find the Win Word

✅ Option to reshuffle and continue playing

✅ Live Game Result Board using Lightning DataTable with pagination.

✅ Real-time result update using server-side records

✅ User-friendly and responsive UI with icons and styling

🚀 How It Works
- User selects a difficulty mode (Easy, Medium, or Hard).
- A set of words is selected randomly; one of them is the Win Word.
- The board is generated with all tiles hidden.
- Player clicks on tiles (max 3 attempts) to reveal and guess the Win Word.
- After the game ends (win/lose), the result is stored in a custom object.
- The Result Board updates dynamically to show game history (Game No., Mode, Played On, Result).

Screenshot :

<img width="1892" height="691" alt="image" src="https://github.com/user-attachments/assets/54cf9947-9956-4453-b0b7-edaed88793dd" />
