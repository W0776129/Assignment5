/*
    Assignment 5
    Nikhil Patel
*/

$(document).ready(function(){
    // your code here
    class ContentCard{
        id = 0;
        title = "titel";
        description = "Description";
        type = "type";
        constructor(id, title, description, type) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        }

        get id() {
        return this.id;
        }
        set id(value) {
            this.id = value;
        }
        get title() {
        return this.title;
        }
        set title(value) {
            this.title = value;
        }
        get description() {
        return this.description;
        }
        set description(value) {
            this.description = value;
        }
        get type() {
        return this.type;
        }
        set type(value) {
            this.type = value;
        }

        updateContent(title, description, type){
            if(title != null && description != null && type != null){
                this.title = title;
                this.description = description;
                this.type = type;
            }
        }
        toString(){
            return `<div id = "content-${this.id}">
                    <h4>${this.title}</h4>
                    <p>${this.description}</p>
                    <div>${this.type}</div>
                    </div>`;
        }

    }


    let languages = [
    [0, 'HTML', 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. ', 'Markup Language'],
    [1, 'CSS', 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' ,'style sheet language'],
    [2, 'php', 'PHP is a general-purpose scripting language geared towards web development','scripting language'],
    [3, 'Javascript', 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.', 'scripting language'],
    [4,'c#','C# is a general-purpose, multi-paradigm programming language.','general-purpose']
    ];

    languages.forEach(language => {
        let ccard = new ContentCard(language[0],language[1],language[2],language[3]);
        $("#content-list").append(ccard.toString());
    });





});

