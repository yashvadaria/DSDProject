import pandas as pd

dataset = './en-fr.csv'
df = pd.read_csv(dataset,nrows = 50000,header=None)

def executeMpi(data):
    op = df[df.iloc[:, 0] == data['sentence']]
    finalResult = op.iloc[:,1].values.tolist()
    return str(finalResult)
