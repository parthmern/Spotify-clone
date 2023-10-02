const apiKey = [ "a70fd29999mshb71212d93fce103p1abaabjsnd0525cc98a66","c2d5b963f5msh597c503d7f47480p15791cjsneec84c940ec0" ];


//dc72bc4f12msh4ff4e713f15abffp13fe41jsn7e39ce83b92b
//6ef20924e9msh8e8035cbdb0e470p154ac1jsne3370260e66a

//unused
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
            index=index+1;
            console.log(" ✅",index);

            

            return  ;
        }
        
        
        return result;
    } catch (error) {
        console.log("errorrr==",error);
        //console.error(error);
        
    }
    
}

export default fetchApi;