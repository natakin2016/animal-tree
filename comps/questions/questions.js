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
option1:''
option2:''
    
    
    if(true){
        console.log("You are from Africa")
        afrotheria()
    }
    else(false){
        console.log("You are from South America")
        xenarthra()
    }
}
function boreoeutheria(){
//Do you want to be from Europe or Laurasia?
    if(true){
        console.log("You are from Europe")
        euarchontoglires()
    }
    else(false){
        console.log("You are from Laurasia")
        laurasiatheria()//l.343
    }
}
function euarchontoglires(){
//Do you want to have big feet or no?
    if(true){
        console.log("You have big feet")
        glires()//
    }
    else(false){
        console.log("You do not have big feet")
        euarchonta()
    }
}
function euarchonta(){
//Do you want to have flaps of skin for flying between your fore- and hind-limbs?
    if(true){
        console.log("You have skin flaps for gliding")
        dermoptera()//
    }
    else(false){
        console.log("You do not have skin flaps for gliding")
        primates()//
    }
}
function laurasiatheria(){
//Do you want males of your species to have external or internal reproductive organs?
    if(true){
        console.log("Your males have external reproductive organs")
        scrotifera()
    }
    else(false){
        console.log("Your males have internal reproductive organs")
        insecEulip()//
    }
}
function scrotifera(){
//Do you want to have wings or no?
    if(true){
        console.log("You have wings")
        chiroptera()//
    }
    else(false){
         console.log("You do not have wings")
         fereuungulata()
    }
}
function  fereuungulata(){
//Do you want to have hooves or no?
    if(true){
        console.log("You have hooves")
        ungulate()
    }
    else(false){
        console.log("You do not have hooves")
        ferae()//l.398
    }
}
function ungulate(){
//Do you want to have an even number of toes or an odd number?
    if(true){
        console.log("You have an even number of toes")
        artiodactyla()
    }
    else(false){
        console.log("You have an odd number of toes")
        perissodactyla()//
    }
}
function artiodactyla(){
//Do you want to live in water or on land?
    if(true){
        console.log("You are marine")
        cetacea()//
    }
    else(false){
        console.log("You are terrestrial")
        artiodactyla2()//
    }
}
function ferae(){
//Do you want to have scales or no?
    if(true){
        console.log("You have scales")
        pholidota()//
    }
    else(false){
        console.log("You do not have scales")
        carnivora()
    }
}
function carnivora(){
//Do you want your middle & inner ear to be in a one-chambered bony structure or two-chambered?
    if(true){
        console.log("You have single-chambered auditory bullae")
        caniformia()//l.476
    }
    else(false){
        console.log("You have double-chambered auditory bullae")
        feliformia()
    }
}
function feliformia(){
//Do you want to have highly specialized scent glands or no?
    if(true){
        	console.log("You have highly specialized scent glands")
            nandiniidae()//
    }
    else(false){
       console.log("You do not have highly specialized scent glands")
       felVivHyaHerpEup()
    }
}
function felVivHyaHerpEup(){
//Do you want to have four toes on your hind feet or five?
    if(true){
        console.log("You have four-toed hind feet")
        feldiae()//
    }
    else(false){
        console.log("You have five-toed hind feet")
        vivHyaHerpEup()
    }
}
function vivHyaHerpEup(){
//Do you want highly developed crushing teeth or underdeveloped? 
    if(true){
        console.log("You have highly developed carnassial teeth")
        viverridae()//
    }
    else(false){
        console.log("You have underdeveloped carnassial teeth")
        hyaHerpEup()
    }
}
function hyaHerpEup(){
//Do you want to be dog-like or cat-like?
    if(true){
        console.log("You are dog-like")
        hyaenidae()//
    }
    else(false){
        console.log("You are cat-like")
        herpEup()
    }
}
function herpEup(){
//Do you wan to be from Eurasia/Africa or Madagascar?
    if(true){
        console.log("You originated in Eurasia/Africa") 
        herpestidae()//
    }
    else(false){
        console.log("You originated in Madagascar")
        eupleridae()//
    }
}

function caniformia(){
//Do you want to lose or keep your 3rd upper molar?
    if(true){
      console.log("You have no third upper molar")
      canidae()  
    }
    else(false){
       console.log("You kept your third upper molar")
       arctoidea() //l.498
    }
}
function canidae(){
//Do you want to be able to partially retract your claws or want them to be fixed in place?
    if(true){
        console.log("You can partially retract your claws")
        foxes()//
    }
    else(false){
        console.log("You cannot retract your claws")
        dogs()//
    }
}
function arctoidea(){
//Do you want to be an omnivore or a carnivore?
    if(true){
        console.log("You are an omnivore")
        bears()//
    }
    else(false){
        console.log("You are a carnivore")
        pinniMust()
    }
}
function pinniMust(){
//Do you want to be semiaquatic or terrestrial?
    if(true){
        console.log("You live both on land and in water")
        pinnipedia()//
    }
    else(false){
        console.log("You live only on land")
        musteloidea()//
    }
}