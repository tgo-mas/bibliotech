import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { VisaoGeral } from "../../components/VisaoGeral/VisaoGeral";
import { UltimosEmprestimos } from "../../components/UltimosEmprestimos/UltimosEmprestimos";

export function Home() {
  const {darkMode}= useContext(DarkModeContext);

  return (
    <div className={(darkMode === "dark" ? "bg-dark text-light" : "bg-light text-dark") + " p-3"}>
      <VisaoGeral />
      <UltimosEmprestimos />
    </div>
  )
};

