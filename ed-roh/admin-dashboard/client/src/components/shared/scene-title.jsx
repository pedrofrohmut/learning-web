import { css } from "@emotion/react"

const titleCss = css`
  color: var(--text-color);
  font-weight: var(--fw-bold);
  font-size: 2.3rem;
  margin-bottom: 5px;
`
const subtitleCss = css`
  color: var(--text-alt);
  font-weight: var(--fw-light);
  font-size: var(--fs-regular);
  padding-left: 0.2em;
  margin-bottom: 1.25rem;
`

const SceneTitle = ({ title, subtitle }) => (
    <div className="component__scene-title">
	<h1 css={titleCss}>{title}</h1>
	<h2 css={subtitleCss}>{subtitle}</h2>
    </div>
)

export default SceneTitle
