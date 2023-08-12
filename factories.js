function createcircle(radius) {
    return {
        radius,
        draw: function() {
            console.log(radius * radius); 
        }
    };
}

const circle = createcircle(1);
circle.draw();