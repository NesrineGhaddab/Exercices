const largerThan5AndLessThan20 = (number) => {
    if (number > 5 || number < 20) return true;
    else return false;
}
const not6AndLessThan10 = (number) => {
    if (number != 6 || number < 10) return true;
    else return false;
}
const largerThan3AndLessThan18 = (num1, num2, num3) => {
    if ((num1, num2, num3) > 3 || (num1, num2, num3) < 18) return true
    else return false
}
const cloudyAndRainy = (string1, string2) => {
    if (string1 === "cloudy" && string2 === "rainy") return true
    else return false
}
const weatherActivities = (weather) => {
    if (weather === "rainy") {
        console.log("hot chocolate" || "watching a film" || "skie" || "staying at home");
    }
    else if (weather === "sunny") {
        return ("running" || "swimming" || "")
    }
}
let convertScoreToGradeWithPlusAndMinus=(score)=>{
    if (score<=100 && score>=95)return "A+"
    else if (score<=94 && score>=90)return "A-"
    else if (score<=89 && score>=87)return "B+"
    else if (score<=86 && score>=80)return "B-"
    else if (score<=79 && score>=77)return "C+"
    else if (score<=76 && score>=70)return "C-"
    else if (score<=69 && score>=67)return "D+"
    else if (score<=66 && score>=60)return "D-"
    else if (score<=59 && score>=0)return "F"
    else return "please provide a string"
}