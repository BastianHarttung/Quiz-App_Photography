let questions =[
    { 
    'question': 'Was ist das Belichtungsdreieck?',
    'answer_1': 'Der Spiegel in einer Spiegelreflexkamera',
    'answer_2': 'Der Zusammenhang zwischen Blende, Verschlusszeit und ISO',
    'answer_3': 'Die Punkte im Bild, die richtig belichtet sein sollen',
    'answer_4': 'Der dreieckige Knopf an jeder Kamera',
    'right_answer': 2,
    'help_image': 'img/belichtungsdreieck.jpg',
    'help_text': 'Das Belichtungsdreieck beschreibt den Zusammenhang zwischen Blende, Verschlusszeit und ISO – alles wichtige Werte in der Fotografie. Sie sind für die richtige Belichtung verantwortlich, ein essentielles Kriterium für die Qualität deiner Fotos.'
    },
    { 
    'question': 'Wofür ist die ISO bei modernen Kameras verantwortlich?',
    'answer_1': 'Die Lichtempfindlichkeit des Sensors',
    'answer_2': 'Die Bildbearbeitung',
    'answer_3': 'Die Raumtemperatur',
    'answer_4': 'Die Blendenöffnung',
    'right_answer': 1,
    'help_image': 'img/iso.jpg',
    'help_text': 'Je höher die ISO, desto höher die Lichtempfindlichkeit des Sensors, aber auch das Rauschverhalten des Sensors steigt.'
    },
    { 
    'question': 'Was ist die Blende bei einer Kamera?',
    'answer_1': 'Das Display an der Rückseite',
    'answer_2': 'Die kleine, verschließbare Öffnung im Inneren des Objektivs',
    'answer_3': 'Das blendende rote Licht des Blitzes',
    'answer_4': 'Der Verschlussdeckel vorne am Objektiv',
    'right_answer': 2,
    'help_image': 'img/blende.jpg',
    'help_text': 'Die Blende ist die hintere Öffnung deines Objektivs. Wie groß diese Öffnung ist, kannst du selbst regeln und damit bestimmen, wie viel Licht auf den Sensor der Kamera trifft. Die Größe der Öffnung wird mit der Blendenzahl angegeben.'
    },
    { 
    'question': 'Als was bezeichnet man den "Goldenen Schnitt" in der Fotografie?',
    'answer_1': 'Die Wahl der Filmempfindlichkeit',
    'answer_2': 'Der Fokus in einem Bild',
    'answer_3': 'Die harmonische Bildgestaltung',
    'answer_4': 'Die Tageszeit mit dem schönsten Licht',
    'right_answer': 3,
    'help_image': 'img/goldenerschnitt.png',
    'help_text': 'Der Goldene Schnitt ist eine seit der Antike bekannte Gestaltungsregel und bezeichnet das Teilungsverhältnis zweier Größen zueinander. Diese Teilung gilt als ausgewogenes Leitmaß und wird vom Menschen als besonders harmonisch empfunden.'
    },
    { 
    'question': 'Wodurch entsteht der Rote-Augen-Effekt bei Personen, die angeblitzt werden?',
    'answer_1': 'Die Augenfarbe wird falsch dargestellt, weil das Gesicht unterbelichtet war',
    'answer_2': 'Die Augenfarbe wird falsch dargestellt, weil das Gesicht überbelichtet war',
    'answer_3': 'Weil die Kamera auf Aufnahme steht und ein rotes Licht hat',
    'answer_4': 'Das Blitzlicht wird von der Netzhaut zurück zum Fotografen reflektiert',
    'right_answer': 4,
    'help_image': 'img/redeyeeffect.jpg',
    'help_text': 'Der Rote-Augen-Effekt entsteht, weil die Netzhaut - wegen ihrer starken Durchblutung - rot ist und das vom Blitz ausgesandte Licht von der Netzhaut reflektiert und zurück in Richtung Kamera gestrahlt wird.'
    }
];

let questionsEng =[
    { 
    'question': 'What is the exposure triangle?',
    'answer_1': 'The mirror in a single lens reflex camera',
    'answer_2': 'The relationship between aperture, shutter speed and ISO',
    'answer_3': 'The points in the image that should be properly exposed',
    'answer_4': 'The triangular button on each camera',
    'right_answer': 2,
    'help_image': 'img/belichtungsdreieck.jpg',
    'help_text': 'The exposure triangle describes the relationship between aperture, shutter speed and ISO - all important values ​​in photography. They are responsible for the correct exposure, an essential criterion for the quality of your photos.'
    },
    { 
    'question': 'What is the ISO responsible for in modern cameras?',
    'answer_1': 'The sensitivity of the sensor to light',
    'answer_2': 'The image processing',
    'answer_3': 'The Temperature',
    'answer_4': 'The aperture',
    'right_answer': 1,
    'help_image': 'img/iso.jpg',
    'help_text': `The higher the ISO, the higher the light sensitivity of the sensor, but the sensor's noise behavior also increases.`
    },
    { 
    'question': 'What is the aperture on a camera?',
    'answer_1': 'The display on the back',
    'answer_2': 'The small, lockable opening inside the lens',
    'answer_3': 'The blinding red light of lightning',
    'answer_4': 'The cover on the front of the lens',
    'right_answer': 2,
    'help_image': 'img/blende.jpg',
    'help_text': "The aperture is the back opening of your lens. You can regulate the size of this opening yourself and thus determine how much light hits the camera's sensor. The size of the opening is indicated by the f-number."
    },
    { 
    'question': 'What is the "golden ratio" called in photography?',
    'answer_1': 'The choice of film sensitivity',
    'answer_2': 'The focus in one picture',
    'answer_3': 'The harmonious picture design',
    'answer_4': 'The time of day with the most beautiful light',
    'right_answer': 3,
    'help_image': 'img/goldenerschnitt.jpg',
    'help_text': 'The golden ratio has been a design rule that has been known since ancient times and describes the ratio between two sizes. This division is considered a balanced guideline and is perceived as particularly harmonious by people.'
    },
    { 
    'question': 'What causes the red-eye effect in people who are flashed at?',
    'answer_1': 'The eye color is displayed incorrectly because the face was underexposed',
    'answer_2': 'The eye color is displayed incorrectly because the face was overexposed',
    'answer_3': 'Because the camera is on recording and has a red light',
    'answer_4': 'The flash light is reflected back to the photographer by the retina',
    'right_answer': 4,
    'help_image': 'img/redeyeeffect.jpg',
    'help_text': 'The red-eye effect occurs because the retina - due to its high blood flow - is red and the light emitted by the flash is reflected by the retina and beamed back towards the camera.'
    }
];

let currentQuestion = 0;
let language = 'de';
let rightAnswers = 0;
let answered = false;

let AUDIO_SUCCESS = new Audio('sounds/right-Camera-shutter.mp3');
let AUDIO_FAIL = new Audio('sounds/wrong-squeak.mp3');
let AUDIO_END = new Audio('sounds/end-applause.wav');

/* Language */
function toggleLanguage(){
    if (language == 'de'){
        language = 'en';
        document.getElementById('Closebtn').style.left = '31px';
        englishStartEnd();
        showQuestion();        
        if (document.getElementById('End-text').innerHTML == 'Sehr gut gemacht!') {
            document.getElementById('End-text').innerHTML = 'Very good!';
        }else if (document.getElementById('End-text').innerHTML == 'Übe noch etwas.'){
            document.getElementById('End-text').innerHTML = 'Not good. Try again';
        }
        console.log('wechsel zu en');
    }
    else if (language =='en'){
        language = 'de';
        document.getElementById('Closebtn').style.left = '1px'; 
        germanStartEnd();
        showQuestion();   
        if (document.getElementById('End-text').innerHTML == 'Very good!') {
            document.getElementById('End-text').innerHTML = 'Sehr gut gemacht!';
        }else if (document.getElementById('End-text').innerHTML == 'Not good. Try again'){
            document.getElementById('End-text').innerHTML = 'Übe noch etwas.';
        }     
        console.log('wechsel zu de')
    }
}

function englishStartEnd(){
    document.getElementById('Start-head').innerHTML = 'Are you ready for digital Photography?';
    document.getElementById('Start-text').innerHTML = 'Then start the ultimate Quiz now';

    document.getElementById('Frage').innerHTML = 'Question';
    document.getElementById('Of').innerHTML = 'of';

    document.getElementById('End-head').innerHTML = 'Your Result';
    document.getElementById('Right').innerHTML = 'Right';
    document.getElementById('Again').innerHTML = 'Again'
}

function germanStartEnd(){
    document.getElementById('Start-head').innerHTML = 'Bist du bereit für die digitale Fotografie?';
    document.getElementById('Start-text').innerHTML = 'Dann starte jetzt das ultimative Quiz';

    document.getElementById('Frage').innerHTML = 'Frage';
    document.getElementById('Of').innerHTML = 'von';

    document.getElementById('End-head').innerHTML = 'Dein Ergebnis';
    document.getElementById('Right').innerHTML = 'Richtig';
    document.getElementById('Again').innerHTML = 'Nochmal'
}


/* Quiz */
function startQuiz(){
    document.getElementById('Startscreen').classList.add('d-none');
    document.getElementById('Quizscreen').classList.remove('d-none');
    document.getElementById('Endscreen').classList.add('d-none');
    document.getElementById('Background').classList.add('blur');
    document.getElementById('Download-cheatsheet').classList.add('d-none');
    document.getElementById('Helpscreen').classList.add('invisible');
    rightAnswers = 0;
    answered = false;
    deleteAnswerColor();
    currentQuestion = 0;
    showQuestion();
}

function showQuestion(){

    if(language=='de'){
        let question = questions[currentQuestion];
        questionInnerHTML()        
                
    }else if (language=='en'){
        let question = questionsEng[currentQuestion];
        questionInnerHTML()        
    }        
    
    if(currentQuestion == 0){
        document.getElementById('Arrow-left').classList.add('invisible');
        document.getElementById('Arrow-right').classList.add('invisible');
    }else if(currentQuestion == questions.length){
        showEndScreen();        
    }else{
        document.getElementById('Arrow-left').classList.remove('invisible');
        /* document.getElementById('Arrow-right').classList.remove('invisible');   */     
    }

    document.getElementById('Question-nr').innerHTML = currentQuestion + 1;
    document.getElementById('Question-length').innerHTML = questions.length;

    /*Progress-bar */
    let percentQuestion = Math.round(((currentQuestion +1) / questions.length)*100);
    document.getElementById('Progress-bar').style.width = percentQuestion + '%';    

    answered = false;
}

function questionInnerHTML(){
    document.getElementById('Question').innerHTML = question['question'];
        document.getElementById('Answer_1').innerHTML = question['answer_1'];
        document.getElementById('Answer_2').innerHTML = question['answer_2'];
        document.getElementById('Answer_3').innerHTML = question['answer_3'];
        document.getElementById('Answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    document.getElementById('Arrow-right').classList.remove('invisible'); 
    
    if(answered == false){
        if(selection == question['right_answer']){  /* Richtige Antwort */
            rightAnswers = rightAnswers+1;
            console.log('richtig');
            AUDIO_SUCCESS.play();
            document.getElementById('Answerbox'+selection).style.backgroundColor = '#CCFF91';
            
            document.getElementById('Help-img').src = question['help_image'];
            document.getElementById('Help-text').innerHTML = question['help_text'];
            document.getElementById('Helpscreen').classList.remove('invisible');
        }else{                                      /* falsche Antwort */
            console.log('falsch');
            AUDIO_FAIL.play();
            let rightanswer = question['right_answer']; 
            document.getElementById('Answerbox'+rightanswer).style.backgroundColor = '#CCFF91';
            document.getElementById('Answerbox'+selection).style.backgroundColor = '#FFA1A1';
            
            document.getElementById('Help-img').src = question['help_image'];
            document.getElementById('Help-text').innerHTML = question['help_text'];
            document.getElementById('Helpscreen').classList.remove('invisible');        
        }
    }

    answered = true;      
    
}

function nextQuestion(){

    document.getElementById('Arrow-right').classList.add('invisible'); 
    
    if(answered == true){
        if (currentQuestion == questions.length-1) {
            AUDIO_END.play()
            showEndScreen();
            
        }else{
            currentQuestion++;     
            
            deleteAnswerColor();

            document.getElementById('Helpscreen').classList.add('invisible');

            showQuestion();
        }

        answered = false;
    }
    
}

function previousQuestion(){

    document.getElementById('Arrow-right').classList.remove('invisible'); 
    
    currentQuestion--;        

    if(answered == true){
        deleteAnswerColor();
    }else if(answered == false){
        document.getElementById('Helpscreen').classList.remove('invisible');
    }    

    document.getElementById('Answerbox'+questions[currentQuestion]['right_answer']).style.backgroundColor = '#CCFF91';

    showQuestion();

    answered = true;
}

function deleteAnswerColor(){
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Answerbox'+ i).style.backgroundColor = 'white';        
    }   
}

function showEndScreen(){
    console.log('Endescreen');
    document.getElementById('Quizscreen').classList.add('d-none');
    document.getElementById('Endscreen').classList.remove('d-none');
    document.getElementById('Helpscreen').classList.remove('invisible');

    document.getElementById('Help-img').src = 'img/cheat-sheet.jpg';
    document.getElementById('Download-cheatsheet').classList.remove('d-none');

    if(language =='de'){
        document.getElementById('Help-text').innerHTML = 'Als Belohnung für das Quiz gibts einen Spickzettel zum Download.'
    }else if(language == 'en'){
        document.getElementById('Help-text').innerHTML = 'As a reward for the quiz, there is a cheat sheet to download.'
    }

    document.getElementById('Rightanswers').innerHTML = rightAnswers;
    document.getElementById('Questionlength').innerHTML = questions.length;

    if(rightAnswers >= 4 && language == 'de'){
        document.getElementById('End-text').innerHTML = 'Sehr gut gemacht!';
    }else if(rightAnswers < 4 && language == 'de'){
        document.getElementById('End-text').innerHTML = 'Übe noch etwas.';
    }else if (rightAnswers >=4 && language == 'en'){
        document.getElementById('End-text').innerHTML = 'Very good!';
    }else if (rightAnswers < 4 && language == 'en'){
        document.getElementById('End-text').innerHTML = 'Not good. Try again';
    }
}


