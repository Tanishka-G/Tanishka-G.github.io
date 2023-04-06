Assignment 3
Tanishka Ghosh - B00921237
tn620502@dal.ca
Personal Website

MY GITHUB WEBSITE FOR BONUS: https://tanishka-g.github.io/

The purpose of this website is to show who I am with a focus on programming.

As mentioned in the assignment instructions, I am indicating that I am reusing HTML and CSS from assignment 2.

index.html
This webpage contains an about me section, a projects section, education section and a languages section. Its purpose is to tell people about myself and my programming experience. 
There are also in text comments in the code for each section.
Lines 1-10: The head section. Contains favicon and website name. Sets up the document. Meta tags and imports style and scripts.
Lines 11-26: Contains the navigational links to the other webpages and location on the webpage. Uses css FLEX BOX to organize. 
Line 28: HERO IMAGE/SPLASH. [1]
Lines 30-39: Contains the about me article/section
Lines 41-62: Contains the project's article/section. Uses tables and css to organise information.
Lines 64-78: Contains my education history article/section.
Lines 80-113: Contains the programming languages I know. Uses nested lists.
Lines 117-133: Contains the site map in a footer section. Uses css GRID LAYOUT to organise. ALso has three buttons to change color (JS: COLOR CHANGER).
Line 50: Has a video (<video> tag) of rock-paper-scissor gameplay. Is stored in rps.mp4. Has controls.

Relative Paths:
#    --------------------------link to the top of the current webpage
#about_me    -------------about me section/article on the webpage
#projects    ----------------projects section/article on the webpage
#education    -------------education section/article on the webpage
#languages    -------------language section/article on the webpage
full_resume.html    ------link to full_resume webpage
full_resume.html#education    -------------education section/article on full_resume.html webpage
full_resume.html#volunteer   ----------------volunteering section/article on full_resume.html webpage
full_resume.html#skills    -------------skills section/article on full_resume.html webpage
full_resume.html#awards    -------------awards section/article on full_resume.html webpage
contact_info.html    -----link to contact_info webpage




full_resume.html
Contains information from my resume. The purpose is to give detailed information about myself. There are also in text comments in the code for each section.
Lines 1-10: The head section. Contains favicon and website name. Sets up the document.
Lines 13-26:  Contains the navigational links to the other webpages and location on the webpage. Uses css FLEX BOX to organise.
Lines 28-42: Contains education article/section.
Lines 44-70: Contains volunteer experience article/section using lists.
Lines 71-86: Contains the skills article/section.
Lines 88-107: Contains the awards article/section.
Lines 109-126: Contains the site map in a footer section. Uses css GRID LAYOUT to organise. ALso has three buttons to change color (JS: COLOR CHANGER).
Relative Paths:
index.html    ----------------------------link to index.html webpage
index.html#about_me    -------------about me section/article on index.html webpage
index.html#projects    ----------------projects section/article on index.html webpage
index.html#education    -------------education section/article on index.html webpage
index.html#languages    -------------language section/article on index.html webpage
#    --------------------------link to the top of the current webpage
#education    -------------education section on the webpage
#volunteer    -------------volunteer work section on the webpage
#skills    -------------skills section on the webpage
#awards    -------------awards section on the webpage
contact_info.html    -----link to contact_info webpage




contact_info.html
Contains links to where people can come to contact me. The purpose is so that people can reach me. There are also in text comments in the code for each section.
Lines 1-10: The head section. Contains favicon and website name. Sets up the document.
Lines 13-20:  Contains the navigational links to the other webpages and location on the webpage. Uses css FLEX BOX to organise.
Lines 22-44: Contains contact information article/section. Also includes some media assets such as a thank you video and audio file.
Lines 45-63: Contains a form that allows you to input your first and last name and a comment. Also has a submit button (links back to contact_info page if clicked).
	Lines 46-48: Has a help button that uses js to display a helpful message when clicked.
Lines 64-70: Contains a flower photo gallery (my own images). Dynamically changes display according to screen size.
Lines 71: Contains a NOTIFICATION when the Random Fact! button is pressed. USES JS NOTIFICATION /  ALERT.
Lines 72-77: Takes in persons age and tells them if I am older than them or not. USES JS CONDITIONALS.
Lines 81-97: Contains the site map in a footer section. Uses css GRID LAYOUT to organise. ALso has three buttons to change color (JS: COLOR CHANGER).
Line 34: contains a <iframe> link to a youtube video [2]
Lines 39-42: <audio> file of some relaxing background music [3]. Has controls and loops.

Relative Paths:
index.html    ----------------------------link to home/index webpage
index.html#about_me    -------------about me section/article on index.html webpage
index.html#projects    ----------------projects section/article on index.html webpage
index.html#education    -------------education section/article on index.html webpage
index.html#languages    -------------language section/article on index.html webpage
full_resume.html    ------link to full_resume webpage
full_resume.html#education    -------------education section/article the full_resume.html webpage
full_resume.html#volunteer   ----------------volunteering section/article on full_resume.html webpage
full_resume.html#skills    -------------skills section/article on full_resume.html webpage
full_resume.html#awards    -------------awards section/article on full_resume.html webpage
#    --------------------------link to the top of the current webpage


style.css
Contains the css styling of the webpages.
Lines 1-4: Sets the background color, max-wdith, and text color for the page.
Lines 7-13: ELEMENT SELECTOR. Sets the body's font style and font size. Also makes image background transparent.
Lines 19-21: CHILD SELECTOR, makes the images inside body (mainly the hero image) fit the width of the screen.
Lines 23-54: Contains the formatting for the projects section of index.html. DOES TABLE STYLING. When the github url is hovered over, it changes colors to dark blue from black. ALSO USES BORDER, PADDING AND MARGIN WHICH AFFECTS 3 IMAGES!
Lines 56-87: Contains the navigation links section. DISPLAY: FLEX.
Lines 89-115: Contains general article formatting. ALSO HAS LIST STYLING. 
Lines 117-223: Contains the GRID LAYOUT for the sitemap/footer section. Turns sitemap links red when hovered over. Also has COLOR CHANGER BUTTONS.
Lines 225-261: Contains the formatting for the form. 
Lines 265-276: Contains the formating for the iframe and audio in contact_info.html file.
Lines 279-281: Makes the background color for any selection dark grey/black and the text wheat color.
Lines 284-292: The formatting for the random fact button.
Lines 294-296: Formatting for the age comparison button.
Lines 298-308: Contains the formating for the gallery and its images.
Lines 310-316: Contains the formatting for the question mark button.
Lines 322-353: Contains specific formatting for the tablet screen size. Uses media query.
Lines 356-387: Contains the specific formatting for the phone screen size. Uses media query.

script.js
Contains the javascript in the website.
Lines 1-7: (EVENT HANDLER) Uses an event listener to see if the "?" help button is pressed in the contact_info.html page.
Lines 9-68: (COLOR CHANGER) Contains the code for the three color changer buttons. 
function nightTheme (line 26) changes the background color and the text color on the page when the night theme button is pressed. No input.
function skyTheme (line 45) changes the background color and the text color on the page when the sky theme button is pressed. No input.
function landTheme (line 51) changes the background color and the text color on the page when the land theme button is pressed. No input.
Lines 70-76: (NOTIFICATION) Contains a notification. When the random fact button is pressed, it outputs an alert syaing a random fact.
Lines 79-100: (CONDITIONAL) Is the JS componenent to see if someone is older than me or not. Takes in the value from what the user inputed in the text feild. 
The function: ageCompare() then uses IF conditionals to check if the age inputed is older than my age or not. It then changes the innerText of the paragraph with id answer to the corresponding messages:
I am older -- If the age entered is less than mine
You are older -- if the age entered is more than mine
We are the same! -- if the age entered is the same
Try again....not an integer -- if nothing else matched up.


File Structure:
A1_tn620502
        -index.html
        -contact_info.html
        -full_resume.html
        -media
                -rps.mp4
                -background_music.mp3
        -images
                -flower1.jpeg
		    -flower2.jpeg
		    -flower3.jpeg
		    -flower4.jpeg
                -favicon.png
                -hero_image.png
                -panda_shooter.png
                -tic-tac-toe.png
        -README.txt
	  -style.css
	  -script.js
        -codereview.pdf
	  -design.pdf




Lists of Assets:
Images:
	  -favicon.png up.png (images\favicon.png)
        -hero_image.png (images\hero_image.png) (from: https://pixabay.com/illustrations/technology-information-digital-2082642/) [1]
        -panda_shooter.png (images\panda_shooter.png)
        -tic-tac-toe.png (images\tic-tac-toe.png)
	  -flower1.jpeg (images\flower1.png)
        -flower2.jpeg (images\flower2.png)
	  -flower3.jpeg (images\flower3.png)
	  -flower4.jpeg (images\flower4.png)
Videos:
        -rps.mp4 (media\rps.mp4)
        -People saying THANK YOU in movies (from: https://www.youtube.com/watch?v=bBc4Imp258U) [2]
Audios:
        -background_music.mp3 (media\background_music.mp3) (from: https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=11157.) [3]
Emails:
 	-tanishkaghosh1122@gmail.com
	-tn620502@dal.ca 
Websites:
	-https://github.com/Tanishka-G/Tani-G 



References


[1]         Plus PNG. 2023. Technology PNG. (2023). Retrieved March 9, 2023 from https://pluspng.com/png-13444.html  
[2]         lee, bruce88. 2021. People saying THANK YOU in movies. YouTube. 
[3]         Lesfm. 2021. Just Relax. Pixabay. https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=11157.