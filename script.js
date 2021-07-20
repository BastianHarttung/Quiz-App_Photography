let questions =[
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
    'question': 'Als was bezeichnet man den "Goldenen Schnitt" in der Fotografie?',
    'answer_1': 'Die Wahl der Filmempfindlichkeit',
    'answer_2': 'Der Fokus in einem Bild',
    'answer_3': 'Die harmonische Bildgestaltung',
    'answer_4': 'Die Tageszeit mit dem schönsten Licht',
    'right_answer': 3,
    'help_image': 'img/????.jpg',
    'help_text': 'Text für Frage 2'
    },
    { 
    'question': 'Wodurch entsteht der Rote-Augen-Effekt bei Personen, die angeblitzt werden?',
    'answer_1': 'Die Augenfarbe wird falsch dargestellt, weil das Gesicht unterbelichtet war',
    'answer_2': 'Die Augenfarbe wird falsch dargestellt, weil das Gesicht überbelichtet war',
    'answer_3': 'Weil die Kamera auf Aufnahme steht und ein rotes Licht hat',
    'answer_4': 'Das Blitzlicht wird von der Netzhaut zurück zum Fotografen reflektiert',
    'right_answer': 4,
    'help_image': 'img/???.jpg',
    'help_text': 'Text für Frage 3'
    }
];

let questionsEng =[
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
    'question': 'What is the "golden ratio" called in photography?',
    'answer_1': 'The choice of film sensitivity',
    'answer_2': 'The focus in one picture',
    'answer_3': 'The harmonious picture design',
    'answer_4': 'The time of day with the most beautiful light',
    'right_answer': 3,
    'help_image': 'img/????.jpg',
    'help_text': 'Text für Frage 2 auf englisch'
    },
    { 
    'question': 'What causes the red-eye effect in people who are flashed at?',
    'answer_1': 'The eye color is displayed incorrectly because the face was underexposed',
    'answer_2': 'The eye color is displayed incorrectly because the face was overexposed',
    'answer_3': 'Because the camera is on recording and has a red light',
    'answer_4': 'The flash light is reflected back to the photographer by the retina',
    'right_answer': 4,
    'help_image': 'img/???.jpg',
    'help_text': 'Text für Frage 3 auf englisch'
    }
];

let currentQuestion = 0;
let language = 'de'

function toggleLanguage(){
    if (language == 'de'){
        language = 'en';
        document.getElementById('Closebtn').style.left = '31px';
        englishStartEnd();
        showQuestion();
        console.log('wechsel zu en')
    }
    else if (language =='en'){
        language = 'de';
        document.getElementById('Closebtn').style.left = '1px'; 
        germanStartEnd();
        showQuestion();        
        console.log('wechsel zu de')
    }
}


function startQuiz(){
    document.getElementById('Startscreen').classList.add('d-none');
    document.getElementById('Quizscreen').classList.remove('d-none');
    document.getElementById('Background').classList.add('blur');
    showQuestion();
}


function showQuestion(){

    if(language=='de'){
        let question = questions[currentQuestion];
        document.getElementById('Question').innerHTML = question['question'];
        document.getElementById('Answer_1').innerHTML = question['answer_1'];
        document.getElementById('Answer_2').innerHTML = question['answer_2'];
        document.getElementById('Answer_3').innerHTML = question['answer_3'];
        document.getElementById('Answer_4').innerHTML = question['answer_4'];
        document.getElementById('Help-img').src = question['help_image'];
        document.getElementById('Help-text').innerHTML = question['help_text'];

    }else if (language=='en'){
        let question = questionsEng[currentQuestion];
        document.getElementById('Question').innerHTML = question['question'];
        document.getElementById('Answer_1').innerHTML = question['answer_1'];
        document.getElementById('Answer_2').innerHTML = question['answer_2'];
        document.getElementById('Answer_3').innerHTML = question['answer_3'];
        document.getElementById('Answer_4').innerHTML = question['answer_4'];
        document.getElementById('Help-img').src = question['help_image'];
        document.getElementById('Help-text').innerHTML = question['help_text'];

    }
    
    
    
    if(currentQuestion == 0){
        document.getElementById('Arrow-left').classList.add('invisible');
    }else if(currentQuestion == questions.length-1){
        document.getElementById('Arrow-right').classList.add('invisible');
    }else{
        document.getElementById('Arrow-left').classList.remove('invisible');
        document.getElementById('Arrow-right').classList.remove('invisible');
    }

    document.getElementById('Question-nr').innerHTML = currentQuestion + 1;
    document.getElementById('Question-length').innerHTML = questions.length;

}



function answer(selection){
    let question = questions[currentQuestion];
    
    if(selection == question['right_answer']){
        console.log('richtig');
        document.getElementById('Answerbox'+selection).style.backgroundColor = '#CCFF91';
        document.getElementById('Helpscreen').classList.remove('invisible');
    }else{
        console.log('falsch');
        let rightanswer = question['right_answer']; 
        document.getElementById('Answerbox'+rightanswer).style.backgroundColor = '#CCFF91';
        document.getElementById('Answerbox'+selection).style.backgroundColor = '#FFA1A1';
        document.getElementById('Helpscreen').classList.remove('invisible');        
    }
    
}

function nextQuestion(){
        
    currentQuestion = currentQuestion + 1;     
    
    for (let i = 1; i <= 4; i++) {
        document.getElementById('Answerbox'+ i).style.backgroundColor = 'white';        
    }    

    document.getElementById('Helpscreen').classList.add('invisible');

    showQuestion();
}


function previousQuestion(){
    
    currentQuestion = currentQuestion - 1;        

    for (let i = 1; i <= 4; i++) {
        document.getElementById('Answerbox'+ i).style.backgroundColor = 'white';        
    }    

    document.getElementById('Helpscreen').classList.add('invisible');

    showQuestion();
}


function englishStartEnd(){
    document.getElementById('Start-head').innerHTML = 'Are you ready for digital Photography?';
    document.getElementById('Start-text').innerHTML = 'Then start the ultimate Quiz now';
    document.getElementById('Frage').innerHTML = 'Question';
    document.getElementById('Of').innerHTML = 'of';
}

function germanStartEnd(){
    document.getElementById('Start-head').innerHTML = 'Bist du bereit für die digitale Fotografie?';
    document.getElementById('Start-text').innerHTML = 'Dann starte jetzt das ultimative Quiz';
    document.getElementById('Frage').innerHTML = 'Frage';
    document.getElementById('Of').innerHTML = 'von';
}





