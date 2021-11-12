let open=document.getElementsByClassName('open-button')[0],
    menu=document.getElementsByClassName('menu-button')[0],
    menuBlock1=document.getElementsByClassName('menu-block-1')[0],
    menuBlock2=document.getElementsByClassName('menu-block-2')[0],
    menuLink1=document.getElementsByClassName('menu-link-1')[0],
    menuLink2=document.getElementsByClassName('menu-link-2')[0],
    menuLink3=document.getElementsByClassName('menu-link-3')[0],
    menuLink4=document.getElementsByClassName('menu-link-4')[0],
    menuLink5=document.getElementsByClassName('menu-link-5')[0],
    navigation=document.getElementById('navigation'),
    menuLink6=document.getElementsByClassName('menu-link-6')[0];
 navigation.style.display='none';
open.addEventListener('click', function(){

    if(!menu.classList.contains('open-done'))
         {

            navigation.style.display='block';
            menu.classList.add('open-done');
            menuBlock1.classList.add('open-done');
            setTimeout(function(){menuBlock2.classList.add('open-done')}, 100);
            setTimeout(function(){menuLink1.classList.add('open-done')}, 500);
            setTimeout(function(){menuLink2.classList.add('open-done')}, 600);
            setTimeout(function(){menuLink3.classList.add('open-done')}, 700);
            setTimeout(function(){menuLink4.classList.add('open-done')}, 800);
            setTimeout(function(){menuLink5.classList.add('open-done')}, 900);
            setTimeout(function(){menuLink6.classList.add('open-done')}, 1000);
        }
        else
        {
            menu.classList.remove('open-done');
           menuLink1.classList.remove('open-done');
            setTimeout(function(){menuLink2.classList.remove('open-done')}, 100);
            setTimeout(function(){menuLink3.classList.remove('open-done')}, 200);
            setTimeout(function(){menuLink4.classList.remove('open-done')}, 300);
            setTimeout(function(){menuLink5.classList.remove('open-done')}, 400);
            setTimeout(function(){menuLink6.classList.remove('open-done')}, 500);
            setTimeout(function(){menuBlock1.classList.remove('open-done')}, 800);
            setTimeout(function(){menuBlock2.classList.remove('open-done')}, 600);
            setTimeout(function(){navigation.style.display='none';}, 600);
            
        }
})

