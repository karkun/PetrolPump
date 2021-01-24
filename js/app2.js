const dashHam = document.querySelector(".head .ham");
const fc = document.querySelector(".fc");
const sc = document.querySelector(".sc");
const mHead = document.querySelectorAll(".menuhead");
const menu = document.querySelectorAll(".menu");


dashHam.addEventListener('click',() => {
    
        
        for(var i=0; i<mHead.length;i++){
           mHead[i].classList.toggle('hide');
         
        }
        for(var i=0; i<menu.length;i++){
           menu[i].classList.toggle('hide');
        }

        fc.classList.toggle('hide');
    
})



// const mediaQuery = window.matchMedia('(max-width: 768px)');
// const mediaQuery2 = window.matchMedia('(min-width: 768px)');

// function myFunc() {
//     if(!dashHam.classList.contains("hide")){
//         for(var i=0; i<mHead.length;i++){
//             mHead[i].classList.add('hide');
        
//         }
//         for(var i=0; i<menu.length;i++){
//             menu[i].classList.add('hide');
//         }

//         fc.classList.add('hide');
//     }
    
    
//   }

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     // Then log the following message to the console
//     console.log('Media Query Matched!');
//     sc.addEventListener('click', myFunc)
//   }
// }

// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);

// function handleTabletChange2(e) {
//     // Check if the media query is true
//     if (e.matches) {
//       // Then log the following message to the console
//       console.log('Media Query Matched!');
//       sc.removeEventListener('click', myFunc)
//     }
//   }
  
//   mediaQuery2.addListener(handleTabletChange2);
//   handleTabletChange2(mediaQuery2);
  