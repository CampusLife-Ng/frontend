import "./Pagination.css"
import { motion } from "framer-motion"

const Pagination = ({ totalNumOfLodges, itemsPerPage, setPageNumber }) => {
    let numPageArr = []
    const numOfPages = Math.ceil(totalNumOfLodges / itemsPerPage)

    for (let i = 1; i <= numOfPages; i++){
        numPageArr.push(i)
    }

    const handlePaginate = (number) => {
        document.querySelectorAll(".page-item").forEach(item => item.classList.remove("active"));
        document.getElementById(`page-item-${number}`)?.classList.add("active")
        setPageNumber(number)
    }
  return (
    <div className="pagination">
        {
            numPageArr.map(number => (
                <motion.span id={`page-item-${number}`} whileTap={{ scale: 0.8 }} onClick={() => handlePaginate(number)} key={number} className="page-item">{number}</motion.span>
            ))
        }
    </div>
  )
}

export default Pagination