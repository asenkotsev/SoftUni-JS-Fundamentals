function vacation(people, type, day) {
    let pricePerPerson = 0;
    let priceTotal = 0;
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 8.45;
                    break;
                case 'Saturday':
                    pricePerPerson = 9.80;
                    break;
                case 'Sunday':
                    pricePerPerson = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 10.90;
                    break;
                case 'Saturday':
                    pricePerPerson = 15.60;
                    break;
                case 'Sunday':
                    pricePerPerson = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 15;
                    break;
                case 'Saturday':
                    pricePerPerson = 20;
                    break;
                case 'Sunday':
                    pricePerPerson = 22.50;
                    break;
            }
            break;
    }

    if (people >= 30 && type == 'Students') {
        priceTotal = (pricePerPerson * people) * 0.85;
    } else if (people >= 100 && type == 'Business') {
        priceTotal = (pricePerPerson * people) - (pricePerPerson * 10);
    } else if (people >= 10 && people <= 20 && type == 'Regular') {
        priceTotal = (pricePerPerson * people) * 0.95;
    } else {
        priceTotal = pricePerPerson * people;
    }
    console.log(`Total price: ${priceTotal.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday')