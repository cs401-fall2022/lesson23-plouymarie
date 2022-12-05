# Retrospective

- name: Marie Plouy
- email: marieplouy@u.boisestate.edu

## Instructions

For the **Experience** section you need to detail your experience with this lab. 

- Were there any things that you struggled with? 
- Were there any parts of this lab that were unclear or poorly specified? 
- Were you able to get the entire project done?

For the **Known issues or Bugs** section you need to detail any issues or bugs that you have in your
code. For example maybe your code crashes randomly and you couldn't figure out why. If your code
doesn't have any issues you can simply write NONE in this section.

For the **Sources used** section you must detail any sources you used outside of the textbook or
course website. If you write NONE in this section it is assumed that you didn't use google at all.
Be safe CITE!

## Experience

I struggled with the project more than expected, but it turned out pretty good. From the beginning I had a idea of what I wanted to blog to look like, however things happened and it turned out a little different than expected. I starter with basic html and js, but then switched over to liquid because I couldn't figure out a way to loop through the database using html. Switching over from liquid to html was pretty simple. I also started out with a popup form to create a new entry and had the delete and edit button on each entry, however, that did not work out as expected. I switched to having the edit and delete button being their own page where you would input the id of the entry to delete and edit. On the edit page I'd like to implement a function that pulls in the entry from the id input so you can edit what you already have and not start from scratch. Then I didn't like how the create was a popup while the edit and delete function had their own page, so I made the create feature also it's own page. For the design, I like a minimalist website, so I stuck with a black background and different shades of blue for all the foreground, the colors also changed throughout the process. 

The project is technically done. I was able to implement all required feature, however, there are a couple things I would still like to add. I would like to implement more into the website later in the week when I have more time. I'd like to figure out how to store images and retreat them in sqlite, as well as pull in the entry from the id, so it can easily be edited. 


## Known issues or Bugs

None. However, I'm planning to figure out how to store an image in sqlite in order to allow users to add pictures to the blog. 

## Sources used

express- backend framework, but using liquid- lab 10

liquid- in-class-design example as well as lab 10 example (https://github.com/shanep/little-bobby-tables)

sqlite- create, update, delete - https://www.sqlitetutorial.net/