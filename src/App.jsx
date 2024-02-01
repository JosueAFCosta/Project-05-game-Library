import Form from './components/Form'
import Input from './components/Input'
import Button from './components/Button'

import styles from './Styles/App.module.css'
import { useState } from 'react'

const games = []

function App () {
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")
    const [progress, setProgress] = useState("")
    const [id, setId] = useState(1)

    function addGame (ev) {
        ev.preventDefault()
        let titleInput = document.getElementById("gameName")
        setTitle(titleInput.textContent)

        let coverUrl = document.getElementById("imgLink")
        setCover(coverUrl)

        let progress = document.getElementsByName("progress")
        setProgress(progress.value)

        games.push({
            title,
            cover,
            progress,
            id
        })
        setId(id++)
        console.log(id)
    }

    return (
        <>
        <header>
            <h1>Biblioteca de Jogos</h1>
            <Form>
                <div className={styles.formDiv}>
                    <Input id="gameName"
                    inputType="text"
                    label="Nome:"
                    />
                    <Input id="imgLink"
                    inputType="text"
                    label="URL da Capa:"
                    />
                    <div> <label className={styles.progressLabel}>Progresso:</label>
                        <Input id="notStarted"
                        inputType="radio"
                        label="Não Comecei"
                        name="progress"
                        value="NotStarted"
                        divStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        labelStyle={{fontSize: "1rem"}}
                        />
                        <Input id="playing"
                        inputType="radio"
                        label="Estou Jogando"
                        name="progress"
                        value="playing"
                        divStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        labelStyle={{fontSize: "1rem"}}
                        />
                        <Input id="finished"
                        inputType="radio"
                        label="Já Terminei"
                        name="progress"
                        value="finished"
                        divStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        labelStyle={{fontSize: "1rem"}}
                        />
                    </div>
                </div>
                
                <div className={styles.btnDiv}>
                    <Button className={styles.btn}
                    onClick={() => addGame(ev)}
                    text="Adicionar a Biblioteca"
                    />
                </div>
                

            </Form>
        </header>

        <hr />

        <main>
            {games.map(() => {

            })}
        </main>

        </>
    )
}


export default App