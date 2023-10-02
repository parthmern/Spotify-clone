const apiKey = [ "4de7c34b80mshaea4a68f0777423p162785jsnbd740451fdda",
"bebaf4146dmsh28c83915508588ap11afd3jsncbe7401f38b4",
"0c90659accmshb6048ec49c04945p1a72dfjsn70e7225ad551",
"b84019bc9fmshe14eba032768215p104cd4jsn342ab8d0c839",
"718ce07cf1mshed64267290ce3a2p18ae72jsn31d64fffc8f5",
"f2dfb9205fmsha36855adee3118dp1cfc56jsn54ba03a8a5b2",
"407a5f3477mshc10616b81f93ed3p1d5193jsna83f704e444c",
"1fbb340f9emshdd95971e11685b7p12a845jsn4fdcd8a981cd",
"d670cb1a1amshd7d6ca56ccfcba8p17cc73jsn7cde78f121ca",
"2c2548e3cemsh00d329b2d2134e2p132a72jsnbd68af3a33c0",
"428d9a0a0amsh7e0bdd763693a5bp1caa7djsna97dc3d78252",
"0dd04952a8msh3fe7d45cfb30fbbp113bcajsn526f11c311c8",
"e2654df770msh35342b4d768379fp194d39jsnc79efc876c95",
"4e3f161d7cmsh2760c80ed6a21c2p192f25jsnef31cdd52e50",
"32fb7036edmshdf3426a42212b2cp1a3347jsn8f1c4c8cd81e",
"c2d5b963f5msh597c503d7f47480p15791cjsneec84c940ec0",
"936eceacc9msh0c036cf1c8e187bp15cc54jsncfeae161fa6c",
"1c43e67752mshf9cd685fb3cfcf3p117780jsn451b7db2ff4a",
"06ae5a6ca0msh9a5571b2ac0ac05p1f23cejsn44f5eedfcb0f",
"c6fbabab3emsh9d47240d7ee72e7p1037d2jsn615c5b2f8e2a",
"f42ea70f8cmsh5539b105a901336p1df7a9jsn06bbf21c71ae",
"a1cf69ea9fmsh806b5a69569a9ddp193480jsnbfefb7c4e82f",
"f40c013f71msh44c6be07cb74074p12ae77jsnfba74ee23ce9",
"3910c1dfadmsh0c4bbaea51302dfp1315a2jsn7ebf8c9444b7",
"726d58a06amsh1a1b9231a5a7f45p170a8fjsn8e126e1b495b",
"afff1de601mshc33b36179a2bdd1p1fb080jsndf0cd7d07e4d",
"2c1330fe23msh4aa0f02a77a779cp1b7668jsnc4b9ae0f593b",
"a70fd29999mshb71212d93fce103p1abaabjsnd0525cc98a66",
"c2d5b963f5msh597c503d7f47480p15791cjsneec84c940ec0",

];


//dc72bc4f12msh4ff4e713f15abffp13fe41jsn7e39ce83b92b
//6ef20924e9msh8e8035cbdb0e470p154ac1jsne3370260e66a

//old
//936eceacc9msh0c036cf1c8e187bp15cc54jsncfeae161fa6c
//1c43e67752mshf9cd685fb3cfcf3p117780jsn451b7db2ff4a
//06ae5a6ca0msh9a5571b2ac0ac05p1f23cejsn44f5eedfcb0f
//c6fbabab3emsh9d47240d7ee72e7p1037d2jsn615c5b2f8e2a
//f42ea70f8cmsh5539b105a901336p1df7a9jsn06bbf21c71ae
//a1cf69ea9fmsh806b5a69569a9ddp193480jsnbfefb7c4e82f
//f40c013f71msh44c6be07cb74074p12ae77jsnfba74ee23ce9
//3910c1dfadmsh0c4bbaea51302dfp1315a2jsn7ebf8c9444b7
//726d58a06amsh1a1b9231a5a7f45p170a8fjsn8e126e1b495b
//afff1de601mshc33b36179a2bdd1p1fb080jsndf0cd7d07e4d
//2c1330fe23msh4aa0f02a77a779cp1b7668jsnc4b9ae0f593b
//a70fd29999mshb71212d93fce103p1abaabjsnd0525cc98a66
//c2d5b963f5msh597c503d7f47480p15791cjsneec84c940ec0




//LATEST
//4de7c34b80mshaea4a68f0777423p162785jsnbd740451fdda
//bebaf4146dmsh28c83915508588ap11afd3jsncbe7401f38b4
//0c90659accmshb6048ec49c04945p1a72dfjsn70e7225ad551
//b84019bc9fmshe14eba032768215p104cd4jsn342ab8d0c839
//718ce07cf1mshed64267290ce3a2p18ae72jsn31d64fffc8f5
//f2dfb9205fmsha36855adee3118dp1cfc56jsn54ba03a8a5b2
//407a5f3477mshc10616b81f93ed3p1d5193jsna83f704e444c
//1fbb340f9emshdd95971e11685b7p12a845jsn4fdcd8a981cd
//d670cb1a1amshd7d6ca56ccfcba8p17cc73jsn7cde78f121ca
//2c2548e3cemsh00d329b2d2134e2p132a72jsnbd68af3a33c0
//428d9a0a0amsh7e0bdd763693a5bp1caa7djsna97dc3d78252
//0dd04952a8msh3fe7d45cfb30fbbp113bcajsn526f11c311c8
//e2654df770msh35342b4d768379fp194d39jsnc79efc876c95
//4e3f161d7cmsh2760c80ed6a21c2p192f25jsnef31cdd52e50
//32fb7036edmshdf3426a42212b2cp1a3347jsn8f1c4c8cd81e


let index = 0;

async function fetchApi(type,rest){

    const url = `https://spotify23.p.rapidapi.com/${type}/${rest}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey[index],
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    try {
        
        const response = await fetch(url, options);
        const result = await response.json();
    
        console.log("🌈",result);
        console.log(" ✅",index);
        if(result.message){
            index= (index + 1) % apiKey.length;

            if(index > apiKey.length){
                return ;
            }

            return fetchApi(type, rest); ;
        }
        
        
        return result;
    } catch (error) {
        console.log("errorrr==",error);
        //console.error(error);
        
    }
    
}

export default fetchApi;