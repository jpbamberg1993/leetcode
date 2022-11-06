using NUnit.Framework;

namespace AddTwoNumbers.Tests;

public class AddTwoNumbersServiceShould
{
    private AddTwoNumbersService _addTwoNumbersService;

    [SetUp]
    public void SetUp()
    {
        _addTwoNumbersService = new AddTwoNumbersService();
    }

    [Test]
    public void AddTwoNumbers_InputTwoArraysOfDiffDigits_ReturnCorrectSumInReverse()
    {
        var listOneArr = new[] {2, 4, 3};
        var listTwoArr = new[] {5, 6, 4};

        var listOne = ArrayToLinkedList(listOneArr);
        var listTwo = ArrayToLinkedList(listTwoArr);

        var result = _addTwoNumbersService.AddTwoNumbers(listOne, listTwo);

        var expectedAnswerArr = new[] {7, 0, 8};
        var expectedAnswer = ArrayToLinkedList(expectedAnswerArr);

        Assert.True(result.Equals(expectedAnswer));
    }

    [Test]
    public void AddTwoNumbers_InputTwoArraysOfZero_ReturnZero()
    {
        var listOneArr = new[] {0};
        var listTwoArr = new[] {0};

        var listOne = ArrayToLinkedList(listOneArr);
        var listTwo = ArrayToLinkedList(listTwoArr);

        var result = _addTwoNumbersService.AddTwoNumbers(listOne, listTwo);

        var expectedAnswerArr = new[] {0};
        var expectedAnswer = ArrayToLinkedList(expectedAnswerArr);

        Assert.True(result.Equals(expectedAnswer));
    }

    [Test]
    public void AddNumbers_InputTwoArraysWithCarryOver_ReturnCorrectList()
    {
        var listOneArr = new[] {9, 9, 9, 9, 9, 9, 9};
        var listTwoArr = new[] {9, 9, 9, 9};

        var listOne = ArrayToLinkedList(listOneArr);
        var listTwo = ArrayToLinkedList(listTwoArr);

        var result = _addTwoNumbersService.AddTwoNumbers(listOne, listTwo);

        var expectedAnswerArr = new[] {8, 9, 9, 9, 0, 0, 0, 1};
        var expectedAnswer = ArrayToLinkedList(expectedAnswerArr);

        Assert.True(result.Equals(expectedAnswer));
    }

    private ListNode ArrayToLinkedList(int[] listOneArr)
    {
        var firstNode = new ListNode(listOneArr[0]);
        var currentNode = firstNode;

        for (var index = 1; index < listOneArr.Length; index++)
        {
            var item = listOneArr[index];
            var node = new ListNode(item);

            currentNode.next = node;
            currentNode = node;
        }

        return firstNode;
    }
}