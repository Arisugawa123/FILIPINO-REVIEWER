// Filipino Language and Culture Study Data
const studyData = {
    // Lesson categories for filtering
    lessonCategories: {
        1: "Aralin 1: Ang Wika",
        2: "Aralin 2: Ang Wika sa Lipunan", 
        3: "Aralin 3: Mga Estraktura ng Wika",
        4: "Aralin 4: Kulturang Pilipino"
    },
    
    // Flashcard data - definitions as questions, terms as answers
    flashcards: [
        {
            question: "Nagmula sa panggagaya ng tao sa mga tunog ng kalikasan, lalo na sa tunog ng hayop.",
            answer: "Teoryang Bow-wow",
            lesson: 1
        },
        {
            question: "Nagsimula sa mga likas na tunog kapag nakakaramdam ng emosyon.",
            answer: "Teoryang Pooh-pooh",
            lesson: 1
        },
        {
            question: "Lahat ng bagay sa kapaligiran ay may sariling tunog.",
            answer: "Teoryang Ding-dong",
            lesson: 1
        },
        {
            question: "Nagmula sa mga tunog na nalilikha ng tao.",
            answer: "Teoryang Yo-he-ho",
            lesson: 1
        },
        {
            question: "Nagsimula sa kumpas o galaw ng kamay na sinasamahan ng tunog.",
            answer: "Teoryang Ta-ta",
            lesson: 1
        },
        {
            question: "Galing sa mga tunog na nalilikha ng mga ritwal.",
            answer: "Teoryang Ta-ra-ra-boom-de-ay"
        },
        {
            question: "Nagmula sa mga awiting.",
            answer: "Teoryang Sing-song"
        },
        {
            question: "Ang unang salita ng tao.",
            answer: "Teoryang mama"
        },
        {
            question: "Tunog na likas na ginagawa ng sanggol.",
            answer: "Teoryang Coo-coo"
        },
        {
            question: "Diyos ang nagbibigay ng wika sa tao.",
            answer: "Genesis Theory/Divine Theory"
        },
        {
            question: "Ang pag-aaral ng ugnayan sa pagitan ng wika at lipunan.",
            answer: "Sosyolingguwistika"
        },
        {
            question: "Tumutukoy sa pagkakaiba-iba ng wika na ginagamit batay sa layunin.",
            answer: "Rehistro ng Wika"
        },
        {
            question: "Hindi madaling nagbabago; tulad ng saligang batas.",
            answer: "Estatiko"
        },
        {
            question: "Ginagamit sa paaralan, pamantasan, at iba pang pormal na institusyon.",
            answer: "Akademik/Pormal"
        },
        {
            question: "Wika sa negosyon, pagpupulong, at opisyal na talakayan.",
            answer: "Konsultatibo"
        },
        {
            question: "Kaswal, gaya ng usapan sa bahay, lasanggan at iba pang hindi pormal na lugar.",
            answer: "Impormal"
        },
        {
            question: "Tungkol sa paksa at layunin ng komunikasyon.",
            answer: "Field (Larangan)"
        },
        {
            question: "Relasyon ng mga kalahok sa usapan (paano katuloy ang tono).",
            answer: "Tenor (Relasyon)"
        },
        {
            question: "Paraan ng komunikasyon (pasalita o pasulat).",
            answer: "Mode (Paraan)"
        },
        {
            question: "Mga sikretong salita o ekspresyon na impormal/hindi maintindihan ng mga tagalabas. Kilala bilang cant o cryptolect.",
            answer: "Argot"
        },
        {
            question: "Mga salita o ekspresyon na impormal/hindi sikreto. Malawak na ginagamit at tinatanggap.",
            answer: "Balbal"
        },
        {
            question: "Ang pag-aaral ng relasyon ng lipunan at ng wika.",
            answer: "Sosyolohiya ng Wika"
        },
        {
            question: "Ito ay pag-aaral ng relasyon ng wika at komunidad, kilala rin bilang kultural na lingguwistika.",
            answer: "Etnolinggwistika"
        },
        {
            question: "Pinag-aaralan ang ugnayan ng wika, lipunan, at kultura sa paggawa at pagpapanatili ng kaugalian at tradisyon.",
            answer: "Antropolohikong Lingguwistika"
        },
        {
            question: "Ang wika ay isang likas at matataong pamamaraan ng paghahatid ng kaisipan, damdamin at mithiin.",
            answer: "Edward Sapir (1949)"
        },
        {
            question: "Ang wika ay sistema ng mga sagisag na binubuo at tinatanggap ng lipunan.",
            answer: "Carroll (1954)"
        },
        {
            question: "Ang wika ay isang set o kabuuan ng mga sagisag na ginagamit sa komunikasyon.",
            answer: "Todd (1987)"
        },
        {
            question: "Ang wika ay isang arbitraryong sistema ng mga tunog na ginagamit ng tao sa pakikipagtalastasan.",
            answer: "Buensuceso"
        },
        {
            question: "Ang wika ay isang kabuuan ng mga sagisag na panandang binibigkas, kaya nagkaroon ng nagkaunawaan at nagkakaisa.",
            answer: "Jumangan, Sr. et. al. (1997)"
        },
        {
            question: "Ang lipunan ay anumang grupo ng mga tao na magsama-sama para sa isang tiyak na layunin.",
            answer: "Wardhaugh (2006)"
        },
        {
            question: "Ang pinakamahalagang layunin ng pag-aaral ng wika ay ang pag-unawa sa gamit nito sa lipunan, hindi lamang ang estruktura nito.",
            answer: "AD. Edwards"
        },
        {
            question: "Walang makapagsasabi kung saan o paano nagmula ang wika.",
            answer: "Hoebel (1966)"
        },
        {
            question: "Patuloy na gumagamit ang tao ng wika; pasulat o pasalita.",
            answer: "Fishman (1997)"
        },
        {
            question: "Sinusubukan ng sosyolohiya ng wika na matuklasan kung paano mas madaling maunawaan ang estrukturang panlipunan.",
            answer: "Wardhaugh (2006) - sa sosyolohiya ng wika"
        },
        {
            question: "Ang wika ay binubuo ng mga tunog na pinili at inayos sa paraang systematiko.",
            answer: "Gleason"
        },
        {
            question: "Ang wika ay susi sa pagkakaisa at pakikipagtalimitan ng lipunan.",
            answer: "Bronislaw Malinowski"
        },
        {
            question: "\"Kung ano ang wika mo, iyon ang pagkatao mo\"",
            answer: "Virgilio Almario"
        },
        {
            question: "Ang tungkulin ng wika sa pagbuo ng panlipunang relasyon at ang papel sa ginagampanan ng wika sa paghatid ng impormasyon tungkol sa tagapagsalita.",
            answer: "Trudgill (2000) - dalawang aspeto ng gawi sa wika"
        },
        {
            question: "Sa China, naniniwala sila na ang Son of Heaven na si Tien Zu ang nagbigay ng wika.",
            answer: "Darshna Tyagi (2006)"
        },
        {
            question: "Ang nagbigay ng wika sa Japan.",
            answer: "Amaterasu"
        },
        {
            question: "Ang nagbigay ng wika sa tao (Mesopotamian deity).",
            answer: "God Nabu"
        },
        {
            question: "Para sa mga Hindu, ang nagbigay ng wika (asawa ni Ibrahim).",
            answer: "Saravasti"
        },
        {
            question: "Ang Son of Heaven na nagbigay ng wika sa China.",
            answer: "Tien Zu"
        },
        {
            question: "Ang pinakamatandang lahi kaya ang wikang ito ang pinakamatandang wika.",
            answer: "Egyptian"
        },
        {
            question: "Ang wika ay naitatag ng Egyptian at Hindu.",
            answer: "W. B. Friedman (1983) at Franklin W. F. Hoffman (1983)"
        },
        {
            question: "May kaibahan ito sa lingguwistikang antropolohiya - sinusuri kung paano ginagamit ang wika sa paggawa at pagpapanatili ng kaugalian, tradisyon, at kaayusang panlipunan.",
            answer: "Foley (1997) - sa Antropolohikong Lingguwistika"
        },
        {
            question: "Panatilihing sentro ang wika; palawakin ang sentro ng wika.",
            answer: "Duranti (2009)"
        },
        {
            question: "Ponolohiya, morpolohiya, sintaks, semantika, pragmatika, at gramatika.",
            answer: "Mga elemento ng wika bilang sistema ng mga simbolo"
        },
        {
            question: "Pagpapakita ng ugnayan ng kultura at wika, pag-unawa kung paano nakikita ng etnikong grupo ang mundo, at kombinasyon ng etnolohiya at lingguwistika.",
            answer: "Pokus ng Etnolinggwistika"
        },
        {
            question: "Higit sa 6000 wika meron sa daigdig.",
            answer: "Bilang ng mga wika sa mundo"
        }
    ],

    // Multiple choice questions
    multipleChoice: [
        {
            question: "Nagmula sa panggagaya ng tao sa mga tunog ng kalikasan, lalo na sa tunog ng hayop.",
            options: ["Teoryang Bow-wow", "Teoryang Pooh-pooh", "Teoryang Ding-dong", "Teoryang Ta-ta"],
            correct: 0,
            explanation: "Ang Teoryang Bow-wow ay nagmula sa panggagaya ng tao sa mga tunog ng hayop at kalikasan."
        },
        {
            question: "Nagsimula sa mga likas na tunog kapag nakakaramdam ng emosyon.",
            options: ["Teoryang Bow-wow", "Teoryang Pooh-pooh", "Teoryang Yo-he-ho", "Teoryang mama"],
            correct: 1,
            explanation: "Ang Teoryang Pooh-pooh ay nagsimula sa mga likas na tunog na ginagawa kapag nakakaramdam ng emosyon."
        },
        {
            question: "Ang pag-aaral ng ugnayan sa pagitan ng wika at lipunan.",
            options: ["Sosyolohiya", "Sosyolingguwistika", "Etnolinggwistika", "Antropolohiya"],
            correct: 1,
            explanation: "Sosyolingguwistika ang pag-aaral ng ugnayan sa pagitan ng wika at lipunan."
        },
        {
            question: "Mga sikretong salita o ekspresyon na hindi maintindihan ng mga tagalabas.",
            options: ["Balbal", "Argot", "Rehistro", "Sosyolohiya"],
            correct: 1,
            explanation: "Argot ay mga sikretong salita na kilala rin bilang cant o cryptolect."
        },
        {
            question: "Wika sa negosyon, pagpupulong, at opisyal na talakayan.",
            options: ["Impormal", "Akademik", "Konsultatibo", "Estatiko"],
            correct: 2,
            explanation: "Konsultatibong rehistro ay ginagamit sa negosyon at opisyal na talakayan."
        },
        {
            question: "\"Kung ano ang wika mo, iyon ang pagkatao mo\"",
            options: ["Virgilio Almario", "Edward Sapir", "Bronislaw Malinowski", "AD. Edwards"],
            correct: 0,
            explanation: "Si Virgilio Almario ang may sikat na kasabihang ito."
        },
        {
            question: "Ang wika ay susi sa pagkakaisa at pakikipagtalimitan ng lipunan.",
            options: ["Edward Sapir", "Carroll", "Bronislaw Malinowski", "Todd"],
            correct: 2,
            explanation: "Si Bronislaw Malinowski ang nagsabi ng pahayag na ito."
        },
        {
            question: "Paraan ng komunikasyon (pasalita o pasulat).",
            options: ["Field", "Tenor", "Mode", "Register"],
            correct: 2,
            explanation: "Mode ay tumutukoy sa paraan ng komunikasyon - pasalita o pasulat."
        },
        {
            question: "Ang nagbigay ng wika sa Japan.",
            options: ["Tien Zu", "Amaterasu", "God Nabu", "Saravasti"],
            correct: 1,
            explanation: "Si Amaterasu ang nagbigay ng wika sa Japan ayon sa paniniwala."
        },
        {
            question: "Lahat ng bagay sa kapaligiran ay may sariling tunog.",
            options: ["Teoryang Ding-dong", "Teoryang Bow-wow", "Teoryang Sing-song", "Teoryang Ta-ta"],
            correct: 0,
            explanation: "Ang Teoryang Ding-dong ay nagsasabing lahat ng bagay ay may sariling tunog."
        },
        {
            question: "Ang pinakamatandang lahi at wika.",
            options: ["Hindu", "Chinese", "Egyptian", "Babylonian"],
            correct: 2,
            explanation: "Egyptian ang pinakamatandang lahi kaya ang wikang Egyptian ang pinakamatandang wika."
        },
        {
            question: "Kaswal, gaya ng usapan sa bahay at lasanggan.",
            options: ["Pormal", "Akademik", "Konsultatibo", "Impormal"],
            correct: 3,
            explanation: "Impormal na rehistro ay ginagamit sa kaswal na usapan."
        },
        {
            question: "Diyos ang nagbibigay ng wika sa tao.",
            options: ["Teoryang Bow-wow", "Genesis Theory", "Teoryang mama", "Teoryang Coo-coo"],
            correct: 1,
            explanation: "Ang Genesis Theory o Divine Theory ay nagsasabing Diyos ang nagbigay ng wika."
        },
        {
            question: "Higit sa 6000 wika meron sa daigdig.",
            options: ["Bilang ng tao", "Bilang ng bansa", "Bilang ng wika sa mundo", "Bilang ng kultura"],
            correct: 2,
            explanation: "Ayon sa teksto, higit sa 6000 ang bilang ng mga wika sa daigdig."
        },
        {
            question: "Tungkol sa paksa at layunin ng komunikasyon.",
            options: ["Field", "Tenor", "Mode", "Style"],
            correct: 0,
            explanation: "Field ay tumutukoy sa paksa at layunin ng komunikasyon."
        },
        {
            question: "Ang Son of Heaven na nagbigay ng wika sa China.",
            options: ["Amaterasu", "Tien Zu", "God Nabu", "Saravasti"],
            correct: 1,
            explanation: "Si Tien Zu ang Son of Heaven na nagbigay ng wika sa China."
        },
        {
            question: "Ito ay pag-aaral ng relasyon ng wika at komunidad.",
            options: ["Sosyolingguwistika", "Etnolinggwistika", "Antropolohiya", "Sosyolohiya"],
            correct: 1,
            explanation: "Etnolinggwistika ay pag-aaral ng relasyon ng wika at komunidad."
        },
        {
            question: "Ang unang salita ng tao.",
            options: ["Teoryang Coo-coo", "Teoryang mama", "Teoryang Bow-wow", "Teoryang Ta-ta"],
            correct: 1,
            explanation: "Ang Teoryang mama ay nagsasabing 'mama' ang unang salita ng tao."
        },
        {
            question: "Walang makapagsasabi kung saan o paano nagmula ang wika.",
            options: ["Fishman", "Hoebel", "Edwards", "Gleason"],
            correct: 1,
            explanation: "Si Hoebel (1966) ang nagsabing walang makapagsasabi kung saan nagmula ang wika."
        },
        {
            question: "Mga salita o ekspresyon na impormal/hindi sikreto na malawak na ginagamit.",
            options: ["Argot", "Balbal", "Rehistro", "Mode"],
            correct: 1,
            explanation: "Balbal ay mga impormal na salitang malawak na ginagamit at tinatanggap."
        }
    ],

    // Identification questions
    identification: [
        {
            question: "Nagmula sa panggagaya ng tao sa mga tunog ng kalikasan, lalo na sa tunog ng hayop.",
            answer: "Teoryang Bow-wow",
            hint: "Tunog na ginagawa ng aso",
            keywords: ["bow-wow", "bow wow", "teoryang bow-wow", "teoryang bow wow"]
        },
        {
            question: "Ang pag-aaral ng ugnayan sa pagitan ng wika at lipunan.",
            answer: "Sosyolingguwistika",
            hint: "Pinagsama ang 'sosyo' at 'lingguwistika'",
            keywords: ["sosyolingguwistika", "sociolinguistics"]
        },
        {
            question: "Mga sikretong salita na hindi maintindihan ng mga tagalabas.",
            answer: "Argot",
            hint: "Kilala rin bilang 'cant' o 'cryptolect'",
            keywords: ["argot", "cant", "cryptolect"]
        },
        {
            question: "Ang Son of Heaven na nagbigay ng wika sa China.",
            answer: "Tien Zu",
            hint: "Dalawang salita na nagsisimula sa T",
            keywords: ["tien zu", "tienzo", "tien-zu"]
        },
        {
            question: "Ang nagbigay ng wika sa Japan.",
            answer: "Amaterasu",
            hint: "Isang Japanese deity na babae",
            keywords: ["amaterasu", "amateratsu"]
        },
        {
            question: "Paraan ng komunikasyon sa tatlong dimensiyon ng rehistro.",
            answer: "Mode",
            hint: "Pwedeng pasalita o pasulat",
            keywords: ["mode", "modo", "paraan"]
        },
        {
            question: "Wika sa negosyon at pagpupulong.",
            answer: "Konsultatibo",
            hint: "Ginagamit sa opisyal na talakayan",
            keywords: ["konsultatibo", "consultative"]
        },
        {
            question: "\"Kung ano ang wika mo, iyon ang pagkatao mo\"",
            answer: "Virgilio Almario",
            hint: "Sikat na Filipino writer at kritiko",
            keywords: ["virgilio almario", "almario"]
        },
        {
            question: "Ito ay pag-aaral ng relasyon ng wika at komunidad.",
            answer: "Etnolinggwistika",
            hint: "Kilala rin bilang kultural na lingguwistika",
            keywords: ["etnolinggwistika", "ethnolinguistics"]
        },
        {
            question: "Ang unang salita ng tao.",
            answer: "Teoryang mama",
            hint: "Ang unang salita na sinasabi ng sanggol",
            keywords: ["mama", "teoryang mama"]
        },
        {
            question: "Ang God na nagbigay ng wika sa tao.",
            answer: "God Nabu",
            hint: "Mesopotamian deity",
            keywords: ["nabu", "god nabu"]
        },
        {
            question: "Mga impormal na salita na malawak na ginagamit at tinatanggap.",
            answer: "Balbal",
            hint: "Hindi sikreto tulad ng argot",
            keywords: ["balbal", "slang"]
        },
        {
            question: "Ang wika ay susi sa pagkakaisa at pakikipagtalimitan ng lipunan.",
            answer: "Bronislaw Malinowski",
            hint: "Anthropologist na Polish",
            keywords: ["bronislaw malinowski", "malinowski"]
        },
        {
            question: "Ang pinakamatandang lahi at wika.",
            answer: "Egyptian",
            hint: "Sinaaunang kabihasnan sa Africa",
            keywords: ["egyptian", "egypt"]
        },
        {
            question: "Diyos ang nagbibigay ng wika sa tao.",
            answer: "Genesis Theory",
            hint: "Kilala rin bilang Divine Theory",
            keywords: ["genesis theory", "divine theory", "genesis", "divine"]
        }
    ]
};

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function normalizeAnswer(answer) {
    return answer.toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ');
}

function checkAnswer(userAnswer, correctAnswer, keywords = []) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);
    
    // Exact match
    if (normalizedUser === normalizedCorrect) {
        return true;
    }
    
    // Check keywords
    if (keywords && keywords.length > 0) {
        return keywords.some(keyword => 
            normalizeAnswer(keyword) === normalizedUser
        );
    }
    
    // Partial match for longer answers
    if (normalizedCorrect.length > 10) {
        const words = normalizedCorrect.split(' ');
        const userWords = normalizedUser.split(' ');
        const matchCount = words.filter(word => 
            userWords.some(userWord => 
                userWord.includes(word) || word.includes(userWord)
            )
        ).length;
        return matchCount >= Math.ceil(words.length * 0.7);
    }
    
    return false;
}