let questions =[
    { 
    'question': 'Wofür ist die ISO bei modernen Kameras verantwortlich?',
    'answer_1': 'Die Lichtempfindlichkeit des Sensors',
    'answer_2': 'Die Bildbearbeitung',
    'answer_3': 'Die Raumtemperatur',
    'answer_4': 'Die Blendenöffnung',
    'right_answer': 1
    },
    { 
    'question': 'Als was bezeichnet man den "Goldenen Schnitt" in der Fotografie?',
    'answer_1': 'Die Wahl der Filmempfindlichkeit',
    'answer_2': 'Der Fokus in einem Bild',
    'answer_3': 'Die harmonische Bildgestaltung',
    'answer_4': 'Die Tageszeit mit dem schönsten Licht',
    'right_answer': 3
    },
    { 
    'question': 'Wodurch entsteht der Rote-Augen-Effekt bei Personen, die angeblitzt werden?',
    'answer_1': 'Die Augenfarbe wird falsch dargestellt, weil das Gesicht unterbelichtet war',
    'answer_2': 'Die Augenfarbe wird falsch dargestellt, weil das Gesicht überbelichtet war',
    'answer_3': 'Weil die Kamera auf Aufnahme steht und ein rotes Licht hat',
    'answer_4': 'Das Blitzlicht wird von der Netzhaut zurück zum Fotografen reflektiert',
    'right_answer': 4
    }
];

let currentQuestion = 0;


function startQuiz(){
    document.getElementById('Startscreen').classList.add('d-none');
    document.getElementById('Quizscreen').classList.remove('d-none');
    document.getElementById('Background').classList.add('blur');
    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];
    
    document.getElementById('Question').innerHTML = question['question'];
    document.getElementById('Answer_1').innerHTML = question['answer_1'];
    document.getElementById('Answer_2').innerHTML = question['answer_2'];
    document.getElementById('Answer_3').innerHTML = question['answer_3'];
    document.getElementById('Answer_4').innerHTML = question['answer_4'];

    document.getElementById('Question-nr').innerHTML = 1;
    document.getElementById('Question-length').innerHTML = questions.length;

}

function answer(selection){
    let question = questions[currentQuestion];
    
    if(selection == question['right_answer']){
        console.log('richtig');
        document.getElementById('Answerbox'+selection).style.backgroundColor = '#CCFF91';
    }else{
        let rightanswer = question['right_answer']; 
        document.getElementById('Answerbox'+rightanswer).style.backgroundColor = '#CCFF91';
        document.getElementById('Answerbox'+selection).style.backgroundColor = '#FFA1A1';
        console.log('falsch');
    }
    console.log('antwort '+selection);
}