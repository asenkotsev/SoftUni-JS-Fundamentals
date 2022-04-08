function cone(r, h) {
    let s = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * (r + s);
    let volume = Math.PI * r * r * h / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5)