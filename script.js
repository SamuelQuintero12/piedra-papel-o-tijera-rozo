const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user-result img"),
      cpuResult = document.querySelector(".cpu-result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option-image");

let userWins = 0;
let cpuWins = 0;

optionImages.forEach((image, index)=>{
    image.addEventListener("click",(e) =>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "Piedra.png";
        result.textContent = "Espera...";
    

    optionImages.forEach((image2,index2)=>{
        index !== index2 && image2.classList.remove("active");
    })


    gameContainer.classList.add("start");

    let time = setTimeout(()=>{
    gameContainer.classList.remove("start");
  

    let imageSrc = e.target.querySelector("img").src;
    userResult.src = imageSrc;

    let randomNumber = Math.floor(Math.random()*3);

    let cpuImages = [
        "Piedra.png",
        "Papel.png",
        "Tijera.png"
    ];

    cpuResult.src = cpuImages[randomNumber];

    let cpuValue = ["R","P","S"][randomNumber];
    let userValue = ["R","P","S"][index];

    let outcomes ={
        RR: "Empate",
        RP: "Cpu",
        RS: "Usuario",
        PP: "Empate",
        PR: "Usuario",
        PS: "Cpu",
        SS: "Empate",
        SR: "Cpu",
        SP: "Usuario"
    };

    let outComeValue = outcomes[userValue + cpuValue];

    if (outComeValue === "Usuario") {
      userWins++;
    } else if (outComeValue === "Cpu") {
      cpuWins++;
    }

    result.textContent = 
    userValue === cpuValue ? "Empate" : `${outComeValue} Gana!!`;

    document.querySelector(".user-wins").textContent = `Usuario: ${userWins}`;
    document.querySelector(".cpu-wins").textContent = `CPU: ${cpuWins}`;
},2500);

  });
  });

  