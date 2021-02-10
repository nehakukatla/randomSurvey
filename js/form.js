class form {
    constructor() {
        this.title = createElement('h1');
        this.name = createElement('h4');
        this.greeting = createElement('h2');
        this.email = createElement('h4');

        this.nameInput = createInput("");
        this.emailInput = createInput("");

        this.reset = createButton('Reset');
        this.submit = createButton('Submit');

        //style
        this.submit.style('width', '100px');
        this.submit.style('height', '40px');
        this.submit.style('background', 'red');

        this.reset.style('width', '100px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'blue');

        //question 1
        this.question1 = createElement('h4', "1. Do you like icecream?");

        //radio buttons
        this.radio1 = createRadio('h4');

        this.radio1.option('yes');
        this.radio1.option('no');

        this.radio1.style('width', '60px');

        //question 2
        this.question2 = createElement('h4', "2. Do you play an instrument?");

        //radio buttons
        this.radio2 = createRadio('h4');

        this.radio2.option('yes');
        this.radio2.option('no');

        this.radio2.style('width', '60px');

        //question 3
        this.question3 = createElement('h4', "3. Do you like music?");

        //radio buttons
        this.radio3 = createRadio('h4');

        this.radio3.option('yes');
        this.radio3.option('no');

        this.radio3.style('width', '60px');

        //question 4
        this.question4 = createElement('h4', "4. Do you drink water?");

        //radio buttons
        this.radio4 = createRadio('h4');

        this.radio4.option('yes');
        this.radio4.option('no');

        this.radio4.style('width', '60px');

        //question 5
        this.question5 = createElement('h4', "5. Do you like food?");

        //radio buttons
        this.radio5 = createRadio('h4');

        this.radio5.option('yes');
        this.radio5.option('no');

        this.radio5.style('width', '60px');

        this.description = createInput("Additional Comment:");
        this.description.style('width', '420px');
        this.description.style('height', '100px');
        this.description.style('color', 'purple');
        this.description.style('font-size', '20px');

    }

    display() {
        this.title.html("Random Survey");
        this.title.position(displayWidth / 2 - 100, 20);
        this.name.html("Name");
        this.name.position(displayWidth / 2 - 50, 125);
        this.nameInput.position(displayWidth / 2, 145);
        this.email.html("email");
        this.email.position(displayWidth / 2 - 50, 200);
        this.emailInput.position(displayWidth / 2, 220);
        this.reset.position(displayWidth / 2 + 100, 950);
        this.submit.position(displayWidth / 2 - 50, 950);

        this.question1.position(displayWidth / 2 - 200, 300);
        this.radio1.position(displayWidth / 2 + 50, 300);
        this.question2.position(displayWidth / 2 - 200, 400);
        this.radio2.position(displayWidth / 2 + 50, 400);
        this.question3.position(displayWidth / 2 - 200, 500);
        this.radio3.position(displayWidth / 2 + 50, 500);
        this.question4.position(displayWidth / 2 - 200, 600);
        this.radio4.position(displayWidth / 2 + 50, 600);
        this.question5.position(displayWidth / 2 - 200, 700);
        this.radio5.position(displayWidth / 2 + 50, 700);

        this.description.position(displayWidth / 2 - 150, 810);

        //what should happen when submit button is pressed
        this.submit.mousePressed(() => {
            this.greeting.show();
            this.description.hide();
            this.greeting.html("Thanks for Participating!");
            this.greeting.position(displayWidth / 2 - 150, 810);
            this.greeting.style('width', '500px');
            this.greeting.style('height', '50px');
            this.greeting.style('background', 'purple');
            this.greeting.style('padding', '30px');
            user.nameInput = this.nameInput.value();
            user.emailInput = this.emailInput.value();
            user.radio1 = this.radio1.value();
            user.radio2 = this.radio2.value();
            user.radio3 = this.radio3.value();
            user.radio4 = this.radio4.value();
            user.radio5 = this.radio5.value();

            pCount += 1;
            user.index = pCount;
            user.update();
            user.updateCount(pCount);
        });

        //what happens when you click reset button
        this.reset.mousePressed(() => {
            this.greeting.hide();
            this.description.show();
            this.nameInput.value('');
            this.emailInput.value('');
            this.radio1.value();
            this.radio2.value();
            this.radio3.value();
            this.radio4.value();
            this.radio5.value();
        });
    }
}