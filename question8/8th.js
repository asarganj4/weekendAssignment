function objKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
}
console.log(objKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "green"));