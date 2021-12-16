console.log("we are here");
const patterns=[];
function pattern(name,surname,domain) {

    if(name && surname){
        let middle=["","."];
        let m_len=middle.length;
        let n_len=name.length;
        let s_len=surname.length;
        for (let i = 0; i < m_len; i++) {
            for (let j = 1; j <=n_len ;j++) {
                patterns.push(name.substr(0,j)+middle[i]+surname+"@"+domain);
                    
            }
    
        }
        for (let i = 0; i < m_len; i++) {
            for (let j = 1; j <=s_len ;j++) {
                patterns.push(surname.substr(0,j)+middle[i]+name+"@"+domain);
                    
            }
    
        }
        for (let i = 0; i < m_len; i++) {
            for (let j = 1; j <=s_len ;j++) {
                patterns.push(name+middle[i]+surname.substr(0,j)+"@"+domain);
                    
            }
    
        }
       

    }
   
     if(name){
        patterns.push(name+"@"+domain);
         
    }
    if(surname){
        patterns.push(surname+"@"+domain);
          
    }
return patterns;
    
}
let c_name="Rohit";
let surname="Bansal";
let domain="dianapps pvt. lmt.";
// domain="dianapps.com"
domain=domain.split(" ");
console.log(pattern(c_name.toLowerCase(),surname.toLowerCase(),domain[0]));