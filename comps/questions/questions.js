<<<<<<< HEAD
;(function(){

  
    angular.module(kingdoms) 
        .component({
        templateUrl:comps/questions/questions.html,
        controller:QuestionsController,
        controllerAs:QC
}) 
function QuestionsController(){
    
}

}());
=======
var qc = this;
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



var questions = [{
    vertebrate: {
        body: 'Do you have a spine?',
        yes: 'cyclostomata',
        no: 'gnathostomata'
    },
    cyclostomata: {
        body: 'Hey there bub?',
        yes: 'You are a Hagfish'
    }
}]





function vertebrate(){
//Do you want to have jaws or no jaws?
    if (noJaws){
       cyclostomata 
    }
    else(jaws){
        gnathostomata
    }
}
   function cyclostomata(){
//Do you want to be a scavenger or a parasite?
       if (scavenger){
           hagfish//
       }
       else(parasite){
           lamprey//
       }
   }
   function gnathostomata(){
//Do you want to have a cartilage skeleton or a bony skeleton?
       if(mineralizedSkeleton){
           chondrichthyes
       }
       else{
           osteichthyes//l.46
       }
   }
   function chondrichthyes(){
//Do you want to have a stomach or no stomach?
       if(stomach){
          elasmobranchii 
       }
       else(noStomach){
           holocephali//
       }
   }
   function elasmobranchii(){
//Do you want to have a round body or a flat body?
       if(roundBody){
           selachii//
       }
       else(flatBody){
           batoidea//
       }
   }
   function osteichthyes(){
//Do you want to have fins on bones or lobes?
       if(rayFins){
           actinopterygii//
       }
       else(lobeFins){
           sarcopterygii
       }
   }
   function sarcopterygii(){
//Do you want to have limbs with digits or without digits?
       if(limbsWithDigits){
           tetrapodomorpha
       }
       else(limbsWithoutDigits){
           dipnomorpha//
       }
   }
   function tetrapodomorpha(){
//Do you want to lay eggs on land or in water?
       if(amnioticEgg){
           mammals,reptiles/birds//l.91
       }
       else(noAmnioticEgg){
           amphibia
       }
   }
   function amphibia(){
//Do you want to lose your limbs or keep them?
       if(loseLimbs){
           caecillians//
       }
       else(keepLimbs){
           salientia,caudata
       }
   }
   function salientiaCaudata(){
//Do you want to have a long body or a short body?
       if(shortBody){
           salientia//
       }
       else(longBody){
           caudata//
       }
   }
   function mammals,reptiles/birds(){
//Do you want to produce milk for your young or no?
       if(milk){
           mammals//l.233
       }
       else(noMilk){
           reptiles/birds
       }
   }
function reptilesBirds(){
//Do you want to have a short body or a long body?
    if(longBody){
        squamata
    }
    else(shortBody){
        archosauromorpha//l.118
    }
}
function squamata(){
//Do you want to lose your limbs or keep them?
    if(keepLimbs){
        lizards//
    }
    else(loseLimbs){
        snakes//
    }
}
function archosauromorpha(){
//Do you want to have a shell or no?
    if(shell){
        testunides//
    }
    else(noShell){
        archosauriformes
    }
}
function archosauriformes(){
//Do you want to have bony armor or no?
    if(bonyArmor){
        crocodilia//
    }
    else(no){
        aves
    }
}
function aves(){
//Do you want to have a bird-like tail or a lizard-like tail?
    if(lizardTail){
        sauriurae//
    }
    else(birdTail){
        ornithurae
    }
}
function ornithurae(){
//Do you want to be aquatic or non-aquatic?
    if(aquatic){
        hesperornithes//
    }
    else(nonAquatic){
        neornithes
    }
}
function neornithes(){
//Do you want to be able to fly or no?
    if(flightless){
        palaeognatha//
    }
    else(flying){
        neognatha
    }
}
function neognatha(){
//Do you want to lay 1-2 eggs at a time or 5-10?
    if(smallClutches){
        *neoaves
    }
    else(largeClutches){
        galloanserae
    }
}
//small clutches = 1-2 eggs at a time
//large clutches = 5-10 eggs at a time
function neoaves(){
    if(){

    }
    else(){
        
    }
}

function galloanserae(){
//Do you want to live only on land or on land and in water?
    if(landfowl){
        galliformes
    }
    else(waterfowl){
        anseriformes//l.219
    }
}
function galliformes(){
//Do you want your young to hatch mature or immature?
    if(immatureHatching){
        cracidae
    }
    else(matureHatching){
        megapodiidae//
    }
}
function cracidae(){
//Do you want to have a bald neck or a feathered neck?
    if(baldNeck){
        numididae//
    }
    else(featheredNeck){
        gallimorphae
    }
}
function gallimorphae(){
//Do you want to be from the Old World or the New World?
    if(oldWorld){
        phasianidae//
    }
    else(newWorld){
        odontophoridae//
    }
}
function anseriformes(){
//Do you want to have hooks/barbs on your ribs or no?
    if(uncinateRibs){
        anatidae//
    }
    else(noUncinateRibs){
        anhimidae//
    }
}
/*uncinate ribs =extensions of bone that project caudally from the vertical segment of each rib. (Uncinate means hooked from Latin uncinatus, from uncinus, barb, from uncus, hook.) They are found in birds (except for screamers), reptiles, and the early amphibian Ichthyostega.[1]

These processes can serve to attach scapula muscles,[1] and help to strengthen the rib cage overlapping with the rib behind them.[1][2] They are also shown to have a role in respiration by increasing the effectiveness of muscles involved in inspiration including the appendicocostal muscles.[3] The processes are short in walking birds and long in diving species and are of intermediate length in non-specialist birds.
*/

function mammals(){
//Do you want to lay eggs or no?
    if(true){
        console.log("You lay eggs")
        monotremes()//
    }
    else(false){
        placental()
    }
}
function placental(){
//Do you want your young to be born mature or immature?
    if(true){
        console.log("Your young are born mature")
        eutheria()//l.288
    }
    else(false){
        console.log("Youryoun are born immature")
        marsupial()
    }
}
function marsupial(){
//Do you want to be from the Americas or Australia/Asia?
    if(true){
        console.log("You are from the Americas")
        didelphimorphia()//
    }
    else(false){
        console.log("You are from Australia/Asia")
        austPauc()
    }
}
function austPauc(){
//Do you want to be from South America or Australia?
    if(true){
        console.log("You are from South America")
        paucituberculata()//
    }
    else(false){
        console.log("You are from Australia")
        australidelphia()
    }
}
function australidelphia(){
//Do you want to be large or small?
    if(true){
        console.log("You are large")
        diprotodontia()//
    }
    else(false){
        console.log("You are small")
        dasyNotoPeram()//
    }
}

eutheria:{
body:'Do you want to be from South America/Africa or somewere else?'
option1:'sAAfr'//atlantogenata
option2:'SomewhereElse'//boreoeutheria
button1txt:'South America/Africa'
button2txt:'Somewhere Else'
},
   

atlantogenata:{
body:'Do you want to be from Africa or South America?'
option1:'africa'//afrotheria
option2:'southAmerica'//xenarthra
button1txt:'Africa'
button2txt:'South America'
},'   
    

boreoeutheria:{
body:'Do you want to be from Europe or Laurasia?'
option1:'europe'//euarchontoglires
option2:'laurasia'//laurasiatheria
button1txt:'Europe'
button2txt:'Laurasia'
},


euarchontoglires:{
body:'Do you want to have big feet or no?'
option1:'bigFeet'//glires
option2:'smallFeet'//euarchonta
button1txt:'Big Feet'
button2txt:'Small Feet'
},

euarchonta:{
body:'Do you want to have flaps of skin for flying between your fore- and hind-limbs?'
option1:'skinFlaps'//dermoptera
option2:'noSkinFlaps'//primates
button1txt:'Skin Flaps'
button2txt:'No Skin Flaps'
},

laurasiatheria:{
body:'Do you want males of your species to have external or internal reproductive organs?'
option1:'internal'//insecEulip
option2:'external'//scrotifera
button1txt:'Internal'
button2txt:'External'
},

scrotifera:{
body:'Do you want to have wings or no?'
option1:'wings'//chiroptera
option2:'noWings'//fereuungulata
button1txt:'Wings'
button2txt:'No Wings'
},

fereuungulata:{
body:'Do you want to have hooves or no?'
option1:'hooves'//ungulate
option2:'noHooves'//ferae
button1txt:'Hooves'
button2txt:'No Hooves'
},

ungulate:{
body:'Do you want to have an even number of toes or an odd number?'
option1:'even'//artiodactyla
option2:'odd'//perissodactyla
button1txt:'Even'
button2txt:'Odd'
},

artiodactyla:{
body:'Do you want to live in water or on land?'
option1:'water'//cetacea
option2:'land'//artiodactyla2
button1txt:'Water'
button2txt:'Land'
},

ferae:{
body:'Do you want to have scales or no?'
option1:'scales'//pholidota
option2:'noScales'//carnivora
button1txt:'Scales'
button2txt:'No Scales'
},

carnivora:{
body:'Do you want your middle & inner ear to be in a one-chambered bony structure or two-chambered?'
option1:'oneChambered'//caniformia
option2:'twoChambered'//feliformia
button1txt:'One-Chambered'
button2txt:'Two-Chambered'
},

feliformia:{
body:'Do you want to have highly specialized scent glands or no?'
option1:'highlySpecialized'//nandiniidae
option2:'notSpecialized'//felVivHyaHerpEup
button1txt:'Highly Specialized'
button2txt:'Not Highly Specialized'
},

felVivHyaHerpEup:{
body:'Do you want to have four toes on your hind feet or five?'
option1:'four'//feldiae
option2:'five'//vivHyaHerpEup
button1txt:'Four'
button2txt:'Five'
},

vivHyaHerpEup:{
body:/Do you want highly developed crushing teeth or underdeveloped?'
option1:'highlyDeveloped'//viverridae
option2:'underdeveloped'//hyaHerpEup
button1txt:'Highly Developed'
button2txt:'Underdeveloped'
},

hyaHerpEup:{
body:'Do you want to be dog-like or cat-like?'
option1:'dogLike'//hyaenidae
option2:'catLike'//herpEup
button1txt:'Dog-Like'
button2txt:'Cat-Like'
},

herpEup:{
body:'Do you want to be from Eurasia/Africa or Madagascar?'
option1:'eurasiaAfrica'//herpestidae
option2:'madagascar'//eupleridae
button1txt:'Eurasia/Africa'
button2txt:'Madagascar'
},

caniformia:{
body:'Do you want to lose or keep your 3rd upper molar?'
option1:'lose'//canidae
option2:'keep'//arctoidea
button1txt:'Lose'
button2txt:'Keep'
},

canidae:{
body:'Do you want to be able to partially retract your claws or want them to be fixed in place?'
option1:'retract'//foxes
option2:'fixed'//dods
button1txt:'Retract'
button2txt:'Fixed'
},

arctoidea:{
body:'Do you want to be an omnivore or a carnivore?'
option1:'omnivore'//bears
option2:'carnivore'//pinniMust
button1txt:'Omnivore'
button2txt:'Carnivore'
},

pinniMust:{
body:'Do you want to be semiaquatic or terrestrial?'
option1:'semiaquatic'//pinnipedia
option2:'terrestrial'//musteloidea
button1txt:'Semiaquatic'
button2txt:'Terrestrial'
},
>>>>>>> f122a9e169b1fc99867ea1be84b3f6f5625c37bf
