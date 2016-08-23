function vertebrate(){
    if (noJaws){
       cyclostomata 
    }
    else(jaws){
        gnathostomata
    }
}
   function cyclostomata(){
       if (scavenger){
           hagfish
       }
       else(parasite){
           lamprey
       }
   }
   function gnathostomata(){
       if(mineralizedSkeleton){
           chondrichthyes
       }
       else{
           osteichthyes
       }
   }
   function chondrichthyes(){
       if(stomach){
          elasmobranchii 
       }
       else(noStomach){
           holocephali
       }
   }
   function elasmobranchii(){
       if(roundBody){
           selachii
       }
       else(flatBody){
           batoidea
       }
   }
   function osteichthyes(){
       if(rayFins){
           actinopterygii
       }
       else(lobeFins){
           sarcopterygii
       }
   }
   function sarcopterygii(){
       if(limbsWithDigits){
           tetrapodomorpha
       }
       else(limbsWithoutDigits){
           dipnomorpha
       }
   }
   function tetrapodomorpha(){
       if(amnioticEgg){
           mammals,reptiles/birds
       }
       else(noAmnioticEgg){
           amphibia
       }
   }
   function amphibia(){
       if(loseLimbs){
           caecillians
       }
       else(keepLimbs){
           salientia,caudata
       }
   }
   function salientiaCaudata(){
       if(shortBody){
           salientia
       }
       else(longBody){
           caudata
       }
   }
   function mammals,reptiles/birds(){
       if(milk){
           *mammals
       }
       else(noMilK){
           reptiles/birds
       }
   }
function reptilesBirds(){
    if(longBody){
        squamata
    }
    else(shortBody){
        archosauromorpha
    }
}
function squamata(){
    if(keepLimbs){
        lizards
    }
    else(loseLimbs){
        snakes
    }
}
function archosauromorpha(){
    if(shell){
        testunides
    }
    else(noShell){
        archosauriformes
    }
}
function archosauriformes(){
    if(bonyArmor){
        crocodilia
    }
    else(no){
        aves
    }
}
function aves(){
    if(lizardTail){
        sauriurae
    }
    else(birdTail){
        ornithurae
    }
}
function ornithurae(){
    if(aquatic){
        hesperornithes
    }
    else(nonAquatic){
        neornithes
    }
}
function neornithes(){
    if(flightless){
        palaeognatha
    }
    else(flying){
        neognatha
    }
}
function neognatha(){
    if(smallClutches){
        *neoaves
    }
    else(largeClutches){
        galloanserae
    }
}
//small clutches = 1-2 eggs at a time
//large clutches = 5-10 eggs at a time
function galloanserae(){
    if(landfowl){
        galliformes
    }
    else(waterfowl){
        anseriformes
    }
}
function galliformes(){
    if(immatureHatching){
        cracidae
    }
    else(matureHatching){
        megapodiidae
    }
}
function cracidae(){
    if(baldNeck){
        numididae
    }
    else(featheredNeck){
        gallimorphae
    }
}
function gallimorphae(){
    if(oldWorld){
        phasianidae
    }
    else(newWorld){
        odontophoridae
    }
}
function anseriformes(){
    if(uncinateRibs){
        anatidae
    }
    else(noUncinateRibs){
        anhimidae
    }
}
/*uncinate ribs =extensions of bone that project caudally from the vertical segment of each rib. (Uncinate means hooked from Latin uncinatus, from uncinus, barb, from uncus, hook.) They are found in birds (except for screamers), reptiles, and the early amphibian Ichthyostega.[1]

These processes can serve to attach scapula muscles,[1] and help to strengthen the rib cage overlapping with the rib behind them.[1][2] They are also shown to have a role in respiration by increasing the effectiveness of muscles involved in inspiration including the appendicocostal muscles.[3] The processes are short in walking birds and long in diving species and are of intermediate length in non-specialist birds.[4] The screamers (Anhimidae) are unique in lacking this process.[5] The process has also been noted in some Enantiornithines.[6] Although bony uncinate processes are unique to birds, cartilaginous uncinate processes are present in crocodiles. The uncinate process has also been reported in Sphenodon, Caudipteryx, oviraptorids, Confuciusornis and Chaoyangia however it does not occur in Archaeopteryx.[6]
*/