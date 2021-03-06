const ARGS_TOKENIZER = /(\w+)\s*(.*)/

export default (params?: string) => {
  if (!params || params.length === 0) {
    return []
  }

  let [, section, sectionArgs] = ARGS_TOKENIZER.exec(params)

  return [section, sectionArgs]
}
