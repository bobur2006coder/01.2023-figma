let inp = +prompt("parolni kitiring")
let password = 1234

function open(inp,password) {
    if (inp===password) {
        alert("Saytga xush kelibsiz")
        
    }else{
        alert('Siz xato parol kiritdingiz iltimos qaytadan urining')
    }
}

open(inp,password)
