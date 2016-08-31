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
        yes: 'You are a Hag Fish'
    }
}]


















var yes=true
var no=false
function vertebrate(){
//Do you want to have jaws or no jaws?
    if (true){
        console.log("You have Jaws")
       cyclostomata ()
    }
    else(jaws){
        gnathostomata
    }
}
   function cyclostomata(){
//Do you want to be a scavenger or a parasite?
       if (true){
           console.log("You are a Hag fish")
        // hagfish
       }
       else(parasite){
           lamprey
       }
   }
   function gnathostomata(){
//Do you want to have a cartilage skeleton or a bony skeleton?
       if(mineralizedSkeleton){
           chondrichthyes
       }
       else{
           osteichthyes
       }
   }
   function chondrichthyes(){
//Do you want to have a stomach or no stomach?
       if(stomach){
          elasmobranchii 
       }
       else(noStomach){
           holocephali
       }
   }
   function elasmobranchii(){
//Do you want to have a round body or a flat body?
       if(roundBody){
           selachii
       }
       else(flatBody){
           batoidea
       }
   }
   function osteichthyes(){
//Do you want to have fins on bones or lobes?
       if(rayFins){
           actinopterygii
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
           dipnomorpha
       }
   }
   function tetrapodomorpha(){
//Do you want to lay eggs on land or in water?
       if(amnioticEgg){
           mammals,reptiles/birds
       }
       else(noAmnioticEgg){
           amphibia
       }
   }
   function amphibia(){
//Do you want to lose your limbs or keep them?
       if(loseLimbs){
           caecillians
       }
       else(keepLimbs){
           salientia,caudata
       }
   }
   function salientiaCaudata(){
//Do you want to have a long body or a short body?
       if(shortBody){
           salientia
       }
       else(longBody){
           caudata
       }
   }
   function mammals,reptiles/birds(){
//Do you want to produce milk for your young or no?
       if(milk){
           mammals
       }
       else(noMilK){
           reptiles/birds
       }
   }
function reptilesBirds(){
//Do you want to have a short body or a long body?
    if(longBody){
        squamata
    }
    else(shortBody){
        archosauromorpha
    }
}
function squamata(){
//Do you want to lose your limbs or keep them?
    if(keepLimbs){
        lizards
    }
    else(loseLimbs){
        snakes
    }
}
function archosauromorpha(){
//Do you want to have a shell or no?
    if(shell){
        testunides
    }
    else(noShell){
        archosauriformes
    }
}
function archosauriformes(){
//Do you want to have bony armor or no?
    if(bonyArmor){
        crocodilia
    }
    else(no){
        aves
    }
}
function aves(){
//Do you want to have a bird-like tail or a lizard-like tail?
    if(lizardTail){
        sauriurae
    }
    else(birdTail){
        ornithurae
    }
}
function ornithurae(){
//Do you want to be aquatic or non-aquatic?
    if(aquatic){
        hesperornithes
    }
    else(nonAquatic){
        neornithes
    }
}
function neornithes(){
//Do you want to be able to fly or no?
    if(flightless){
        palaeognatha
    }
    else(flying){
        neognatha
    }
}
function neognatha(){
//Do you want to lay 1-2 eggs at a time or 5-10?
    if(smallClutches){
        neoaves
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
        anseriformes
    }
}
function galliformes(){
//Do you want your young to hatch mature or immature?
    if(immatureHatching){
        cracidae
    }
    else(matureHatching){
        megapodiidae
    }
}
function cracidae(){
//Do you want to have a bald neck or a feathered neck?
    if(baldNeck){
        numididae
    }
    else(featheredNeck){
        gallimorphae
    }
}
function gallimorphae(){
//Do you want to be from the Old World or the New World?
    if(oldWorld){
        phasianidae
    }
    else(newWorld){
        odontophoridae
    }
}
function anseriformes(){
//Do you want to have hooks/barbs on your ribs or no?
    if(uncinateRibs){
        anatidae
    }
    else(noUncinateRibs){
        anhimidae
    }
}
/*uncinate ribs =extensions of bone that project caudally from the vertical segment of each rib. (Uncinate means hooked from Latin uncinatus, from uncinus, barb, from uncus, hook.) They are found in birds (except for screamers), reptiles, and the early amphibian Ichthyostega.[1]

These processes can serve to attach scapula muscles,[1] and help to strengthen the rib cage overlapping with the rib behind them.[1][2] They are also shown to have a role in respiration by increasing the effectiveness of muscles involved in inspiration including the appendicocostal muscles.[3] The processes are short in walking birds and long in diving species and are of intermediate length in non-specialist birds.
*/

function mammals(){
//Do you want to lay eggs or no?
    if(layEggs){
        monotremes
    }
    else(noEggs){
        placental
    }
}
function placental(){
//Do you want your young to be born mature or immature?
    if(bornMature){
        eutheria(placental)
    }
    else(bornImmature){
        marsupial
    }
}
// DAN START HERE
function marsupial(){
//Do you want to be from the Americas or Australia/Asia?
    if(newWorld){
        didelphimorphia
    }
    else(australasia){
        australidelphia/paucituberculata
    }
}
function australidelphia/paucituberculata(){
//Do you want to be from South America or Australia?
    if(southAmerica){
        paucituberculata
    }
    else(austalia){
        australidelphia
    }
}
function australidelphia(){
//Do you want to be large or small?
    if(large){
        diprotodontia
    }
    else(small){
        dasyuromorphia,notoryctidae,peramelemorphia
    }
}

function eutheria(){
//Do you want to be from South America/Africa or somewere else?
    if(southAmerica/africa){
        atlantogenata
    }
    else(elsewhere){
        boreoeutheria
    }
}
function atlantogenata(){
//Do you want to be from Africa or South America?
    if(africa){
        afrotheria
    }
    else(southAmerica){
        xenarthra
    }
}
function boreoeutheria(){
//Do you want to be from Europe or Laurasia?
    if(europe){
        euarchontoglires
    }
    else(laurasia){
        laurasiatheria
    }
}
function euarchontoglires(){
//Do you want to have big feet or no?
    if(jackedUpFeet){
        glires
    }
    else(not){
        euarchonta
    }
}
function euarchonta(){
//Do you want to have flaps of skin for flying between your fore- and hind-limbs?
    if(glidingSkinFlaps){
        dermoptera
    }
    else(not){
        primates
    }
}
function laurasiatheria(){
//Do you want males of your species to have external or internal testes?
    if(scrotum){
        scrotifera
    }
    else(not){
        insectivora/eulipotyphla
    }
}
function scrotifera(){
//Do you want to have wings or no?
    if(wings){
        chiroptera
    }
    else(noWings){
         fereuungulata
    }
}
function  fereuungulata(){
//Do you want to have hooves or no?
    if(hoofed){
        ungulate
    }
    else(noHoofs){
        ferae
    }
}
function ungulate(){
//Do you want to have an even number of toes or an odd number?
    if(evenToed){
        artiodactyla
    }
    else(oddToed){
        perissodactyla
    }
}
function artiodactyla(){
//Do you want to live in water or on land?
    if(marine){
        cetacea
    }
    else(terrestrial){
        artiodactyla2
    }
}
function ferae(){
//Do you want to have scales or no?
    if(scales){
        pholidota
    }
    else(noScales){
        carnivora
    }
}
function carnivora(){
//Do you want your middle & inner ear to be in a one-chambered bony structure or two-chambered?
    if(singleChamberedAuditoryBullae){
        caniformia
    }
    else(doubleChamberedAuditoryBullae){
        feliformia
    }
}
function feliformia(){
//Do you want to have highly specialized scent glands or no?
    if(highlySpecializedScentGlands){
        	nandiniidae
    }
    else(not){
       (felidae,
(viverridae,
(hyaenidae,
(herpestidae,
eupleridae))))  
    }
}
function (felidae,
(viverridae,
(hyaenidae,
(herpestidae,
eupleridae))) (){
//Do you want to have four toes on your hind feet or five?
    if(fourToedHindFoot){
        feldiae
    }
    else(fiveToedHindFoot){
        (viverridae,
(hyaenidae,
(herpestidae,
eupleridae)))
    }
}
function (viverridae,(hyaenidae,
(herpestidae,
eupleridae))) (){
//Do you want highly developed crushing teeth or underdeveloped? 
    if(relativelyUndevelopedCarnassialTeeth){
        viverridae
    }
    else(developedCarnassialTeeth){
        (hyaenidae,
(herpestidae,
eupleridae))
    }
}
function (hyaenidae,
((hyaenidae,
(herpestidae,
eupleridae)))) (){
//Do you want to be dog-like or cat-like?
    if(dogLike){
        hyaenidae
    }
    else(catLike){
        herpestidae,
        eupleridae
    }
}
function herpestidae,eupleridae(){
//Do you wan to be from Eurasia/Africa or Madagascar?
    if(eurasian/african){
        herpestidae
    }
    else(madagascar){
        eupleridae
    }
}

function caniformia(){
//Do you want to lose or keep your 3rd upper molar?
    if(lose3rdUpperMolar){
      canidae  
    }
    else(keep){
       arctoidea 
    }
}
function canidae(){
//Do you want to be able to partially retract your claws or want them to be fixed in place?
    if(partiallyRetractileClaws){
        foxes
    }
    else(fixedClaws){
        dogs
    }
}
function arctoidea(){
//Do you want to be a carnivore or an omnivore?
    if(omnivorous){
        bears
    }
    else(carnivorous){
        pinnipedia/musteloidea
    }
}
function pinnipedia/pinnipedia(){
//Do you want to be semiaquatic or terrestrial?
    if(semiaquatic){
        pinnipedia
    }
    else(terrestrial){
        pinnipedia
    }
}