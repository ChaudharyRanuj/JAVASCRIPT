// DECLARING A OBJECT

const jonas = {
  firstName: "Jonas",
  LastName: "Schmedtman",
  friends: ["Michael", "Peter", "Steven"],
  fullName: function () {
    return this.firstName + " " + this.LastName;
  },
};

// console.log(`${jonas.firstName} ${jonas.LastName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
console.log(jonas.fullName());

// READING OBJECT VALUE PRACTICAL EXAMPLE IN REACT

function Button({ children, onClick, type }) {
  return (
    // USING RE-USEABLE BUTTON SETTING STYLE reading.. styles[type]
    <button onClick={onClick} className={`${styles.btn}  ${styles[type]}`}>
      {children}
    </button>
  );
}
