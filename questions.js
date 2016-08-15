'Do you want to be one cell or many cells?'
    if ('one cell'){
        unicellular
    }
    else{
        multicellular
    }

'Do you want to have true tissues or no true tissues'
    if('true tissues'){
        eumatozoa
    }
    else{
        parazoa
    }

'Do you want to have two cell layers or three cell layers?'
    if('two layers'){
        diploblastic
    }
    else{
        triploblastic
    }
 //OR   
 'Do you want to have two sides or many sides?'
    if('two sides'){
        bilateral
    }
    else{
        radial
    }
    radial: 'Do you want to have different forms as a child and an adult or not?'
        if('yes'){
            cnidarian
        }
        else{
            ctenophore
        }

'Do you want to have body cavities or no body cavities?'
    switch (new trait().getTrait('body cavity'= 0, 'decide later'=1,'no cavity'=2)) {
    case 0:
        trait = "coelomate";
        break;
    case 1:
        trait = "pseudocoelomate";
        break;
    case 2:
        trait = "acoelomate";
        break;
    }

'Do you want your mouth to develop first?'
    if('yes'){
        protostome
    }
    else{
        deuterostome
    }
