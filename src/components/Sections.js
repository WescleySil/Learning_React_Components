export default function Sections(props){
    return (
        <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul class={props.listType}>{props.children}</ul>
                </div>
            </section>
    );
}