import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type DefaultSoSectionTwoStyles from "./DefaultSoSectionTwo.opti-style.json"

export type DefaultSoSectionTwoProps = LayoutProps<typeof DefaultSoSectionTwoStyles>
export type DefaultSoSectionTwoComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultSoSectionTwoProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultSoSectionTwoComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultSoSectionTwoComponentProps<DT>) => ReactNode


export type SoSectionTwoLayoutProps = DefaultSoSectionTwoProps
export type SoSectionTwoComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends SoSectionTwoLayoutProps = SoSectionTwoLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type SoSectionTwoComponent<DT extends Record<string, any> = Record<string, any>, LP extends SoSectionTwoLayoutProps = SoSectionTwoLayoutProps> = (props: SoSectionTwoComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: SoSectionTwoLayoutProps | null) : props is DefaultSoSectionTwoProps
{
    return props?.template == "DefaultSoSectionTwo"
}

export function isDefaultSoSectionTwoProps(props?: SoSectionTwoLayoutProps | null) : props is DefaultSoSectionTwoProps
{
    return props?.template == "DefaultSoSectionTwo"
}