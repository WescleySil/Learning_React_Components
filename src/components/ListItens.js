export default function PhotoItens(props) {
  return (
      <li>
        <a
          target="_blank"
          href={props.url}
        >
          <img
            src={props.imageUrl}
            alt={props.alt}
          />
        </a>
      </li>
  );
}
