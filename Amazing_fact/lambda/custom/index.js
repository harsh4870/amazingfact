/* eslint-disable  func-names */
/* es
/**

By HARSH MANVAR
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.503139e4-13ef-4b57-bc64-6f01a89b9b28';  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
               'In 1948, before Pakistan had the facilities, The Reserve Bank of India issued provisional notes for the Pakistani Rupee.',
                'In 2011, a woman named Aimee Davison purchased a non visible piece of art for $10,000.',
                'In 2006, a woman lit matches in a flight to cover her fart smell. That forced an emergency landing.',
                'Saddam Hussein was the author of a romantic novel called Zabiba and the King.',
                ' In Taiwan, there is a restaurant that serves food on miniature toilets.',
                'Prince Charles & Prince William always travel in separate planes in case there is a crash, one needs to survive.',
                'Las Vegas casinos have no clocks.',
                'Everyday, 20 banks are robbed. The average amount stolen is ₹1,72,100.',
                'Everyday, 20 banks are robbed. The average amount stolen is ₹1,72,100.',
                'As a kid, Adolf Hitler wanted to be a priest.',
                'He also suffered from Ailurophobia, which is a fear of cats. Alexander the Great, Napoleon and Mussolini had the same phobia.',
                'Global Warming helped settle a land dispute between India and Bangladesh. The area in question was New Moore, or South Talpatti. But the island drowned because of global warming in 2010.',
                'Butterflies were originally called flutterflies.',
                'Once, carrots were purple.',
                'Millions of crabs migrate on the Christmas Islands towards the shore to mate and populate.',
                'The 110-acre Snake Island in Sao Paulo has 4,000 snakes. Which is one snake for every 6 square yards. It is one of the worlds deadliest islands.',
                'Worldwide, women earn US$18 trillion but spend US$28 trillion.',
                'Charles Darwin ate almost every animal he discovered.',
                'Russia has a larger surface area than Pluto.',
                'However, it has less population than the small country of Bangladesh.',
                'Sir Isaac Newton at the age of 19, threatened to burn his parents alive.',
                'Two actors have died while playing Judas in live Biblical plays by accidentally hanging themselves for real during the death scene.',
                ' For every human, there are 1.6 million ants in the world.',
                'However, the weight of all ants combined is almost equal to the weight of all humans combined.',
                'The worlds largest family stays in India. The husband has 39 wives and 94 children.',
                ' Amazon holds a patent on 1-click buying; Apple pays them licensing fees.',
                'Microsoft has a patent, for opening a new window when you click a hyperlink. It expires in 2021.',
                'Speaking of patents, Halliburton Company once tried to patent patenting.',
                'Brad Pitt was banned from entering China for his role in the movie Seven Years in Tibet (1997).',
                'A man planted 7,000 trees to make a guitar shaped forest as tribute to his wife. ',
            ],
            SKILL_NAME: 'amazing Facts',
            GET_FACT_MESSAGE: "Here's your fact:",
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit...Try Cricket & IPL Fact and win Exsiting Prices And Offer..',
            HELP_REPROMPT: 'Try Cricket & IPL Fact and win Exsiting Prices And Offer...What can I help you with?',
            STOP_MESSAGE: 'Try Cricket & IPL Fact and win Exsiting Prices And Offer.....Goodbye!',
            HARSH_MANVAR: 'Hello Harsh, Nice to see you over there,Have a nice day to you' ,
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'In 1948, before Pakistan had the facilities, The Reserve Bank of India issued provisional notes for the Pakistani Rupee.',
                'In 2011, a woman named Aimee Davison purchased a non visible piece of art for $10,000.',
                'In 2006, a woman lit matches in a flight to cover her fart smell. That forced an emergency landing.',
                'Saddam Hussein was the author of a romantic novel called Zabiba and the King.',
                ' In Taiwan, there is a restaurant that serves food on miniature toilets.',
                'Prince Charles & Prince William always travel in separate planes in case there is a crash, one needs to survive.',
                'Las Vegas casinos have no clocks.',
                'Everyday, 20 banks are robbed. The average amount stolen is ₹1,72,100.',
                'Everyday, 20 banks are robbed. The average amount stolen is ₹1,72,100.',
                'As a kid, Adolf Hitler wanted to be a priest.',
                'He also suffered from Ailurophobia, which is a fear of cats. Alexander the Great, Napoleon and Mussolini had the same phobia.',
                'Global Warming helped settle a land dispute between India and Bangladesh. The area in question was New Moore, or South Talpatti. But the island drowned because of global warming in 2010.',
                'Butterflies were originally called flutterflies.',
                'Once, carrots were purple.',
                'Millions of crabs migrate on the Christmas Islands towards the shore to mate and populate.',
                'The 110-acre Snake Island in Sao Paulo has 4,000 snakes. Which is one snake for every 6 square yards. It is one of the worlds deadliest islands.',
                'Worldwide, women earn US$18 trillion but spend US$28 trillion.',
                'Charles Darwin ate almost every animal he discovered.',
                'Russia has a larger surface area than Pluto.',
                'However, it has less population than the small country of Bangladesh.',
                'Sir Isaac Newton at the age of 19, threatened to burn his parents alive.',
                'Two actors have died while playing Judas in live Biblical plays by accidentally hanging themselves for real during the death scene.',
                ' For every human, there are 1.6 million ants in the world.',
                'However, the weight of all ants combined is almost equal to the weight of all humans combined.',
                'The worlds largest family stays in India. The husband has 39 wives and 94 children.',
                ' Amazon holds a patent on 1-click buying; Apple pays them licensing fees.',
                'Microsoft has a patent, for opening a new window when you click a hyperlink. It expires in 2021.',
                'Speaking of patents, Halliburton Company once tried to patent patenting.',
                'Brad Pitt was banned from entering China for his role in the movie Seven Years in Tibet (1997).',
                'A man planted 7,000 trees to make a guitar shaped forest as tribute to his wife. ',
            ],
            SKILL_NAME: 'amazing Facts',
        },
    },
    'en-IN': {
        translation: {
            FACTS: [
               'In 1948, before Pakistan had the facilities, The Reserve Bank of India issued provisional notes for the Pakistani Rupee.',
                'In 2011, a woman named Aimee Davison purchased a non visible piece of art for $10,000.',
                'In 2006, a woman lit matches in a flight to cover her fart smell. That forced an emergency landing.',
                'Saddam Hussein was the author of a romantic novel called Zabiba and the King.',
                ' In Taiwan, there is a restaurant that serves food on miniature toilets.',
                'Prince Charles & Prince William always travel in separate planes in case there is a crash, one needs to survive.',
                'Las Vegas casinos have no clocks.',
                'Everyday, 20 banks are robbed. The average amount stolen is ₹1,72,100.',
                'Everyday, 20 banks are robbed. The average amount stolen is ₹1,72,100.',
                'As a kid, Adolf Hitler wanted to be a priest.',
                'He also suffered from Ailurophobia, which is a fear of cats. Alexander the Great, Napoleon and Mussolini had the same phobia.',
                'Global Warming helped settle a land dispute between India and Bangladesh. The area in question was New Moore, or South Talpatti. But the island drowned because of global warming in 2010.',
                'Butterflies were originally called flutterflies.',
                'Once, carrots were purple.',
                'Millions of crabs migrate on the Christmas Islands towards the shore to mate and populate.',
                'The 110-acre Snake Island in Sao Paulo has 4,000 snakes. Which is one snake for every 6 square yards. It is one of the worlds deadliest islands.',
                'Worldwide, women earn US$18 trillion but spend US$28 trillion.',
                'Charles Darwin ate almost every animal he discovered.',
                'Russia has a larger surface area than Pluto.',
                'However, it has less population than the small country of Bangladesh.',
                'Sir Isaac Newton at the age of 19, threatened to burn his parents alive.',
                'Two actors have died while playing Judas in live Biblical plays by accidentally hanging themselves for real during the death scene.',
                ' For every human, there are 1.6 million ants in the world.',
                'However, the weight of all ants combined is almost equal to the weight of all humans combined.',
                'The worlds largest family stays in India. The husband has 39 wives and 94 children.',
                ' Amazon holds a patent on 1-click buying; Apple pays them licensing fees.',
                'Microsoft has a patent, for opening a new window when you click a hyperlink. It expires in 2021.',
                'Speaking of patents, Halliburton Company once tried to patent patenting.',
                'Brad Pitt was banned from entering China for his role in the movie Seven Years in Tibet (1997).',
                'A man planted 7,000 trees to make a guitar shaped forest as tribute to his wife. ',
            ],
            SKILL_NAME: 'amazing Facts',
        },
    },
    //GERMAN
    'de': {
        translation: {
            FACTS: [
                '1948, bevor Pakistan die Anlagen hatte, gab die Reserve Bank of India vorläufige Noten für die pakistanische Rupie heraus.',
'Im Jahr 2011 kaufte eine Frau namens Aimee Davison ein nicht sichtbares Kunstwerk für 10.000 US-Dollar.',
'Im Jahr 2006 zündete eine Frau Streichhölzer an, um ihren Furzgeruch zu decken. Das hat eine Notlandung erzwungen. ',
'Saddam Hussein war der Autor eines romantischen Romans namens Zabiba und der König.',
'In Taiwan gibt es ein Restaurant, das Essen auf Miniaturtoiletten serviert.',
'Prince Charles & Prince William reisen immer in getrennten Flugzeugen, falls es zu einem Absturz kommt, man muss überleben.',
'Las Vegas Casinos haben keine Uhren.',
'Jeden Tag werden 20 Banken ausgeraubt. Der durchschnittliche gestohlene Betrag beträgt 1,72,100 $. ',
'Jeden Tag werden 20 Banken ausgeraubt. Der durchschnittliche gestohlene Betrag beträgt 1,72,100 $. ',
'Als Kind wollte Adolf Hitler Priester werden.',
'Er litt auch an Ailurophobie, eine Angst vor Katzen. Alexander der Große, Napoleon und Mussolini hatten die gleiche Angst. ',
'Global Warming half bei der Beilegung eines Landstreits zwischen Indien und Bangladesch. Das fragliche Gebiet war New Moore oder South Talpatti. Aber die Insel ist 2010 wegen der Erderwärmung ertrunken. ',
'Schmetterlinge wurden ursprünglich Fluttöpfe genannt.',
            ],
            SKILL_NAME: 'erstaunliche Tatsache',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen? Try Cricket & IPL Fact and win Exsiting Prices And Offer',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            HARSH_MANVAR: 'Hello Harsh, Nice to see you over there,Have a nice day to you' ,
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};
const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
        this.emit('GetHarshManvar');
        
    },
     'GetHarshManvar': function () {
        const speechOutput = this.t('HARSH_MANVAR');
        this.emit(':tell', speechOutput);
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
   
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
