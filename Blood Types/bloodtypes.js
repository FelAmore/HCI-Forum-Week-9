function canGiveBlood(blood1, blood2) {
    if (blood1[0] == "O"){
        if (blood1[1] == "-"){
            return true
        }
        else if (blood1[1] == "+"){
            if (blood2[blood2.length-1] == "+"){
                return true
            }
        }
        else {
          return false
        }
    }
    else if (blood1[0] == "A" && blood1.length == 2){
        if (blood1[1] == "-" && blood2[0] == "A"){
            return true
        }
        else if (blood1[1] == "+" && blood2[blood2.length-1] == "+"){
            return true
        }
        else {
          return false
        }
    }
    else if (blood1[0] == "B" && blood1.length == 2){
        if (blood1[1] == "-" && (blood2[0] == "B" || blood2.length == 3)){
            return true
        } 
        else if (blood1[1] == "+" && blood2[blood2.length-1] == "+"){
            return true
        }
    }
    else if (blood1.length == 3){
        if (blood1 == "AB+" && blood2 == "AB+"){
            return true
        }
        else if (blood1 == "AB-" && blood2.length == 3){
            return true
        }
        else {
          return false
        }
    }
    else {
      return false
    }
}

console.log(canGiveBlood('O+', 'A+'))
console.log(canGiveBlood('A-', 'B-'))
console.log(canGiveBlood('A-', 'AB+'))

/*
O+ to all +
O- to all
A+ to A+, AB+
A- to A-, A+, AB-, AB+
B+ to B+, AB+
B- to B-, B+, AB-, AB+
AB+ to AB+ ; from all
AB- to AB-, AB+
