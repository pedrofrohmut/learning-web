import { css } from "@emotion/react"

const containerStyle = css`
    padding: var(--scene-padding);
`

const SceneContainer = ({ className, children }) => {
    return (
	<div className={className} css={containerStyle}>{children}</div>
    )
}

export default SceneContainer
