import { motion } from "framer-motion";
import { alertVariants } from "./alertVariants";

export function SuccessBox() {
  return (
    <motion.div
      variants={alertVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      style={{
        padding: "16px",
        background: "#55efc4",
        borderRadius: "6px",
        color: "#2d3436",
        fontWeight: "bold"
      }}
    >
      Cadastro realizado com sucesso ✅
    </motion.div>
  );
}