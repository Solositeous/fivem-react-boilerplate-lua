import React, { Context, createContext, useContext, useEffect, useState } from "react";
import { UseNuiEvent } from "../hooks/UseNuiEvent";
import { FetchNui } from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null)

interface VisibilityProviderValue {
	setVisible: (visible: boolean) => void
	visible: boolean
}

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [visible, setVisible] = useState(false)

	UseNuiEvent<boolean>('visible', setVisible)

	// Handle pressing escape/backspace
	useEffect(() => {
		// Only attach listener when we are visible
		if (!visible) return;

		const keyHandler = (e: KeyboardEvent) => {
			if (["Backspace", "Escape"].includes(e.code)) {
				if (!isEnvBrowser()) FetchNui("closeUI");
				else setVisible(!visible);
			}
		}

		window.addEventListener("keydown", keyHandler)

		return () => window.removeEventListener("keydown", keyHandler)
	}, [visible])

	return (
		<VisibilityCtx.Provider
			value={{
				visible,
				setVisible
			}}
		>
			<div style={{ visibility: visible ? 'visible' : 'hidden' }}>
				{children}
			</div>
		</VisibilityCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
