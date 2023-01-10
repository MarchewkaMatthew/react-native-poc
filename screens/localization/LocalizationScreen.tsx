import { Box, ScreenContainer, Text } from "../../App.styles"
import { getLocales, getCalendars } from 'expo-localization';
import { useTranslation } from "react-i18next";

const locales = getLocales()[0];
const calendars = getCalendars()[0];
const deviceLanguage = locales.languageCode;

export const LocalizationScreen = () => {
  const { t } = useTranslation(['common', 'landing']);

  return (
    <ScreenContainer>
      <Text>Localization {deviceLanguage}</Text>
      <Text>{t("previous")}</Text>
      <Text>{t("landing:welcomeText", { name: "Mateusz"})}</Text>
      <Box bgColor="pink" />
    </ScreenContainer>
  )
}