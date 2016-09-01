var qc = this;
var questions = {
    vertebrate: {
        body: 'Do you want to have jaws or no jaws?',
        option1: 'cyclostomata',
        option2: 'gnathostomata',
        button1txt:'You have jaws',
        button2txt:'You don\'t have jaws'
    },
    cyclostomata: {
        body: 'Do you want to be a scavenger or a parasite',
        option1: 'cyclostomata',//THIS IS THE END 
        option2:'lamprey',//THIS IS THE END 
        button1txt:'Scavenger',
        button2txt:'Parasite'
    },
    gnathostomata:{
        body:'Do you want to have a cartilage skeleton or a bony skeleton?',
        option1:'chondrichthyes',
        option2:'osteichthyes',
        button1txt:'Bony skeleton',
        button2txt:'Cartilage Skeleton'
    },
     chondrichthyes:{
        body:'Do you want to have a stomach or no stomach?',
        option1:'elasmobranchii',
        option2:'holocephali',
        button1txt:'Stomach',
        button2txt:'No Stomach'
     },
     elasmobranchii:{
        body:'Do you want to have a round body or a flat body?',
        option1:'selachii',
        option2:'batoidea',
        button1txt:'Round Body',
        button2txt:'Flat Body'
     },
     osteichthyes:{
        body:'Do you want to have fins on bones or lobes?',
        option1:'actinopterygii',
        option2:'sarcopterygii',
        button1txt:'Ray fins',
        button2txt:'Lobe Fins'
     },
     sarcopterygii:{
        body:'Do you want to have limbs with digits or without digits?',
        option1:'tetrapodomorpha',
        option2:'dipnomorpha',
        button1txt:'Limbs with Digits',
        button2txt:'Limbs without Digits'
     },
     tetrapodomorpha:{
        body:'Do you want to lay eggs on land or in water?',
        option1:'reptiles',
        option2:'amphibia',
        button1txt:'Eggs on Land',
        button2txt:'Eggs in Water'
     },
     salientiaCaudata:{
        body:'Do you want to lose your limbs or keep them?',
        option1:'caecillians',
        option2:'salientiaCaudataLimbs',
        button1txt:'Lose Limbs',
        button2txt:'Keep Limbs'
     },
     salientiaCaudataLimbs:{
        body:'Do you want to have a long body or a short body?',
        option1:'salientia',
        option2:'caudata',
        button1txt:'Short Body',
        button2txt:'Long Body'
     },
     reptiles:{
        body:'Do you want to produce milk for your young?',
        option1:'mammals',
        option2:'reptilesBirds',
        button1txt:'Yes',
        button2txt:'No'
     },
      reptilesBirds:{
        body:'Do you want to have a short body or a long body?',
        option1:'squamata',
        option2:'archosauromorpha',
        button1txt:'Long Body',
        button2txt:'Short Body'
     },
      squamata:{
        body:'Do you want to lose your limbs or keep them?',
        option1:'lizards',
        option2:'snakes',
        button1txt:'Keep Limbs',
        button2txt:'Lose Limbs'
     },
    archosauromorpha:{
        body:'Do you want to have a shell?',
        option1:'testunides',
        option2:'archosauriformes',
        button1txt:'Shell',
        button2txt:'No Shell'
     },
    archosauriformes:{
        body:'Do you want to have bony armor?',
        option1:'crocodilia',
        option2:'aves',
        button1txt:'Bony armor',
        button2txt:'No Bony Armor'
     },
     aves:{
        body:'Do you want to have a bird-like tail or a lizard-like tail?',
        option1:'sauriurae',
        option2:'ornithurae',
        button1txt:'Lizard Tail',
        button2txt:'Bird Tail'
     },
    ornithurae:{
        body:'Do you want to be aquatic or non-aquatic?',
        option1:'hesperornithes',
        option2:'neornithes',
        button1txt:'Aquatic',
        button2txt:'Not Aquatic'
     },
     neornithes:{
        body:'Do you want to be able to fly',
        option1:'neognatha',
        option2:'palaeognatha',
        button1txt:'Yes',
        button2txt:'No'
     },
    neognatha:{
        body:'Do you want to lay 1-2 eggs at a time or 5-10?',
        option1:'neoaves',
        option2:'galloanserae',
        button1txt:'1-2',
        button2txt:'5-10'
     },
     galloanserae:{
        body:'Do you want to live only on land or on land and in water?',
        option1:'galliformes',
        option2:'anseriformes',
        button1txt:'Land',
        button2txt:'Water'
     },
     galliformes:{
        body:'Do you want your young to hatch mature or immature?',
        option1:'cracidae',
        option2:'megapodiidae',
        button1txt:'Immature',
        button2txt:'Mature'
     },
    cracidae:{
        body:'Do you want to have a bald neck or a feathered neck?',
        option1:'numididae',
        option2:'gallimorphae',
        button1txt:'Bald',
        button2txt:'Feathered'
     },
     gallimorphae:{
        body:'Do you want to be from the Old World or the New World?',
        option1:'phasianidae',
        option2:'odontophoridae',
        button1txt:'Old World',
        button2txt:'New World'
     },
     anseriformes:{
        body:'Do you want to have hooks/barbs on your ribs?',
        option1:'anatidae',
        option2:'anhimidae',
        button1txt:'Yes',
        button2txt:'No'
     },
     mammals:{
        body:'Do you want to lay eggs?',
        option1:'monotremes',
        option2:'placental',
        button1txt:'Yes',
        button2txt:'No'
     },
     placental:{
        body:'Do you want your young to be born mature or immature?',
        option1:'eutheria',
        option2:'marsupial',
        button1txt:'Immature',
        button2txt:'Mature'
     },
     marsupial:{
        body:'Do you want to be from the Americas or Australia/Asia?',
        option1:' didelphimorphia',
        option2:'australidelphiaPaucituberculata',
        button1txt:'The Americas',
        button2txt:'Austrailia and Asia'
     },
      australidelphiaPaucituberculata:{
        body:'Do you want to be from South America or Australia?',
        option1:' paucituberculata',
        option2:'australidelphia',
        button1txt:'South America',
        button2txt:'Austrailia and Asia'
     },
      australidelphia:{
        body:'Do you want to be from South America or Australia?',
        option1:' diprotodontia',
        option2:'australidelphia',
        button1txt:'South America',
        button2txt:'Austrailia and Asia'
     }
}

function defineEnds(obj){
  var i=1
  for(var prop in obj){
    var name=obj[prop].option1
    // console.log(name)
    // console.log(obj[name])
     if(obj[name]===undefined){
       console.log(i++ +' '+name+' is a dead end')
     }
    
    
  }
}

function askQuestion(name){
    qc.question = getQuestion(name)

}

function getQuestion(name){
    if(questions[name]){
        return questions[name];
    }
    //Trigger End
    qc.result = name;
}

function answer(choice){
    askQuestion(qc.question[choice]);
}





