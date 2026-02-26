let images = [
"https://www.bing.com/th/id/OIP.o8yCog14XSFTiQp4FzvGhAHaEO?w=369&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
"https://th.bing.com/th/id/OIP.3xi-fTPDGqQp3E1TdyI5bQHaJ4?w=127&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
"https://th.bing.com/th/id/OIP.o_9nwcUlbOAx_bFfzjZuIwHaHa?w=203&h=203&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"

];
let index = 0;

function changeimg(){
    index++;

    if (index >= images.length){
        index=0;
    }
    document.getElementById('myimage').src = images[index];
}



