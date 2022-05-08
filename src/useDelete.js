const deleteFromSingle = id => {
      fetch(`http://localhost:5000/userItems/${id}`, {
            method: "DELETE",
      })
            .then(res => res.json())
            .then(result => {
                  console.log(result);
            })
}
const deleteFromAll = id => {
      fetch(`https://still-depths-00724.herokuapp.com/allCars/${id}`, {
            method: "DELETE",
      })
            .then(res => res.json())
            .then(result => {
                  console.log(result);
            })
}
const useDelete = [deleteFromAll, deleteFromSingle]

export default useDelete;