function grade(Score) {
    switch (true) {
        case (Score >= 85 && Score <= 100):
            return Score + " A+ Grade";
            break;
        case (Score >= 75 && Score < 85):
            return Score + " A Grade";
            break;
        case (Score >= 65 && Score < 75):
            return Score + " B Grade";
            break;
        case (Score >= 55 && Score < 65):
            return Score + " C Grade";
            break;
        case (Score >= 45 && Score < 55):
            return Score + " D Grade";
            break;
        case (Score >= 35 && Score < 45):
            return Score + " E Grade";
            break;
        case (Score >= 0 && Score < 35):
            return Score + " F Grade";
            break;
        default:
            return "invalid";
    }
}
console.log(grade(70));
console.log(grade(30));
console.log(grade(-9));
console.log(grade(123));