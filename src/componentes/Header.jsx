const Header = ({ selectedTeam, teamMemberCount }) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h2>Cantidad de Miembros</h2>
                    <h4>El {selectedTeam} tiene: {teamMemberCount} {teamMemberCount === 1 ? "miembro" : "miembros"}</h4>
                </div>
            </div>
        </header>
    )
}

export default Header;