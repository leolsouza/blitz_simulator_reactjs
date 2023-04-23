const DifficultyFilter = ({ value, handleDiffFilter }) => {
  return (
    <div className="ml-2">
      <select value={value} onChange={(e) => handleDiffFilter(e.target.value)}>
        <option value="">Todas as dificuldades</option>
        <option value="easy">Fácil</option>
        <option value="medium">Médio</option>
        <option value="hard">Difícil</option>
      </select>
    </div>
  );
};

export default DifficultyFilter;
